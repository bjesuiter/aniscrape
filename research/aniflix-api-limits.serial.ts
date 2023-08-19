import { fetchEpisodeUncached, fetchShowUncached } from "../src/aniflix_api.ts";

const showName = "log-horizon";

console.time(`fetch-complete`);

console.time("fetch-show");
const show = await fetchShowUncached(showName);
console.timeEnd("fetch-show");

for (const season of show.seasons) {
  for (const episode of season.episodes) {
    console.time(`fetching-episode-${episode.id}`);
    const episodeData = await fetchEpisodeUncached({
      showName,
      seasonNumber: season.number,
      episodeNumber: episode.number,
    });

    if (episodeData === undefined) {
      console.error(`episode-${episode.id}: response undefined!`);
    }

    console.timeEnd(`fetching-episode-${episode.id}`);

    // for (const stream of episodeData.streams) {
    //   episodes.push({
    //     seasonNumber: season.number,
    //     episodeNumber: episode.number,
    //     name: episode.name,
    //     hosterName: stream.hoster.name,
    //     hosterId: stream.hoster.id,
    //     videoUrl: stream.link,
    //   });
    // }
  }
}

console.timeEnd("fetch-complete");
