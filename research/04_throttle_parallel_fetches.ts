import { fetchEpisodeUncached } from "@/src/aniflix_api.ts";
import { HTTPError, TimeoutError } from "ky";
import pThrottle from "p-throttle";

const showName = "log-horizon";
const concurrency = 2;
const now = Date.now();

const runThrottled = pThrottle({
  limit: 2,
  interval: 1000,
});

const throttledEpisodeFetch = runThrottled(
  async (episodeRequest: EpisodeRequest) => {
    const secDiff = ((Date.now() - now) / 1000).toFixed();

    try {
      const episodeData = await fetchEpisodeUncached(episodeRequest);
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

    // Good: Count of these logs === limit param of p-throttle (for example limit = 2 === 2 logs)
    return `fetch-${episodeRequest.reqId}: ${secDiff}s`;
  },
);

const episodeRequests = [];

type EpisodeRequest = {
  reqId: number;
  showName: string;
  seasonNumber: number;
  episodeNumber: number;
};

for (let i = 0; i < 100; i++) {
  const reqData = {
    reqId: i,
    showName,
    seasonNumber: 1,
    episodeNumber: i % 5 + 1,
  };

  const episodeData = await throttledEpisodeFetch(reqData);
}

// Caution: overwrites console history due to big output!
// console.log(rawEpisodes);
