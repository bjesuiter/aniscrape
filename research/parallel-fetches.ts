import { fetchEpisodeUncached } from "@/src/aniflix_api.ts";
import { HTTPError, TimeoutError } from "ky";
import pMap from "p-map";

const showName = "log-horizon";
const concurrency = 2;

const episodeRequests = [];

type EpisodeRequest = {
  reqId: number;
  showName: string;
  seasonNumber: number;
  episodeNumber: number;
};

for (let i = 0; i < 100; i++) {
  episodeRequests.push({
    reqId: i,
    showName,
    seasonNumber: 1,
    episodeNumber: i % 5 + 1,
  });
}

// console.log(episodeRequests);

let overallErrorCounter = 0;
let goodRequestsUntilNextError = 0;

// assemble async mapper for episode requests
const mapper = async (episodeRequest: EpisodeRequest) => {
  console.log(`fetching ${episodeRequest.reqId} ...`);
  console.time(`fetch-${episodeRequest.reqId}`);

  goodRequestsUntilNextError++;

  try {
    const episodeData = await fetchEpisodeUncached(episodeRequest);
    return { ...episodeData, request: episodeRequest };
  } catch (error) {
    overallErrorCounter++;
    goodRequestsUntilNextError = 0;
    if (error instanceof HTTPError && error.response.status === 503) {
      // const errorJson = await error.response.json();
      console.error(`fetch-${episodeRequest.reqId}: Unavailable (503)`);
    }
    if (error instanceof TimeoutError) {
      // const errorJson = await error.response.json();
      console.error("Timeout Error:", error);
    }
    console.error(error);
  }

  console.timeEnd(`fetch-${episodeRequest.reqId}`);
};

// split one rawEpisode into n UiEpisodes, depending on how many streaming services are available
// rawEpisode === contains data for all streaming providers
// UiEpisode === the episode on exactly one provider
const rawEpisodes = await pMap(episodeRequests, mapper, {
  concurrency,
});

// Caution: overwrites console history due to big output!
// console.log(rawEpisodes);
