import { fetchEpisodeUncached, fetchShowUncached } from "../src/aniflix_api.ts";

const showName = "log-horizon";

const reqData = {
  showName,
  seasonNumber: 1,
  episodeNumber: 1,
};

let count = 0;
let lastResponse;

do {
  count++;
  // console.log(`Fetch Episode Count: `, count);
  console.time(`fetch-${count}`);
  lastResponse = await fetchEpisodeUncached(reqData);
  console.timeEnd(`fetch-${count}`);
} while (lastResponse !== undefined);
