import { fetchEpisodeUncached } from "@/src/aniflix_api.ts";
import pMap from "p-map";

const showName = "log-horizon";

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

// assemble async mapper for episode requests
const mapper = async (episodeRequest: EpisodeRequest) => {
  console.log(`fetching ${episodeRequest.reqId} ...`);
  console.time(`fetch-${episodeRequest.reqId}`);
  const episodeData = await fetchEpisodeUncached(episodeRequest);
  console.timeEnd(`fetch-${episodeRequest.reqId}`);
  return { ...episodeData, request: episodeRequest };
};

// split one rawEpisode into n UiEpisodes, depending on how many streaming services are available
// rawEpisode === contains data for all streaming providers
// UiEpisode === the episode on exactly one provider
const rawEpisodes = await pMap(episodeRequests, mapper, {
  concurrency: 1,
});

// Caution: overwrites console history due to big output!
// console.log(rawEpisodes);
