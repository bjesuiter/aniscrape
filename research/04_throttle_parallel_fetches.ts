import { fetchEpisodeUncached } from "@/src/aniflix_api.ts";
import { HTTPError, TimeoutError } from "ky";
import pThrottle from "p-throttle";
import pMap from "p-map";

const showName = "log-horizon";
const limitPerSek = 4;
const concurrency = 4;
const now = Date.now();
const episodeRequests = [];

let overallErrorCounter = 0;
let goodRequestsSinceLastError = 0;

type EpisodeRequest = {
  reqId: number;
  showName: string;
  seasonNumber: number;
  episodeNumber: number;
};

const runThrottled = pThrottle({
  limit: limitPerSek,
  interval: 1000,
});

const throttledEpisodeFetch = runThrottled(
  async (episodeRequest: EpisodeRequest) => {
    const secDiff = ((Date.now() - now) / 1000).toFixed();

    // Good: Count of these logs === limit param of p-throttle (for example limit = 2 === 2 logs)
    console.log(`fetching ${episodeRequest.reqId} ...
    sekDiffSinceStart: ${secDiff}s,
    errorCount: ${overallErrorCounter}
    goodRequestsSinceLastError: ${goodRequestsSinceLastError}`);

    const episodeData = await fetchEpisodeUncached(episodeRequest);
    return { ...episodeData, request: episodeRequest };
  },
);

// fill episodeRequest array
for (let i = 0; i < 100; i++) {
  episodeRequests.push({
    reqId: i,
    showName,
    seasonNumber: 1,
    episodeNumber: i % 5 + 1,
  });
}

// assemble async mapper for episode requests
const mapper = async (episodeRequest: EpisodeRequest) => {
  console.time(`fetch-${episodeRequest.reqId}`);

  goodRequestsSinceLastError++;

  try {
    const episodeData = await throttledEpisodeFetch(episodeRequest);
    return { ...episodeData, request: episodeRequest };
  } catch (error) {
    overallErrorCounter++;
    goodRequestsSinceLastError = 0;
    if (error instanceof HTTPError && error.response.status === 503) {
      // const errorJson = await error.response.json();
      console.error(`fetch-${episodeRequest.reqId}: Unavailable (503)`);
    } else if (error instanceof TimeoutError) {
      // const errorJson = await error.response.json();
      console.error("Timeout Error:", error);
    } else {
      console.error(error);
    }
  }

  console.timeEnd(`fetch-${episodeRequest.reqId}`);
};

const rawEpisodes = await pMap(episodeRequests, mapper, {
  concurrency,
});

// Caution: overwrites console history due to big output!
// console.log(rawEpisodes);
