import { UiEpisode } from "@/src/types.ts";
import { AniflixImage } from "./AniflixImage.tsx";

export function AniflixShowRender(
  { name, description, cover, episodes }: {
    name: string;
    description: string;
    cover: string;
    episodes: UiEpisode[];
  },
) {
  const bySeason = new Map<number, UiEpisode[]>();

  for (const episode of episodes) {
    const seasonNumber = episode.seasonNumber;
    if (!bySeason.has(seasonNumber)) {
      bySeason.set(seasonNumber, []);
    }
    bySeason.get(seasonNumber)?.push(episode);
  }

  const bySeasonArray = Array.from(bySeason.entries());

  const byHosterArray = (episodes: UiEpisode[]) => {
    // group by hoster
    const byHoster = new Map<string, UiEpisode[]>();

    for (const episode of episodes) {
      const hosterName = episode.hosterName;
      if (!byHoster.has(hosterName)) {
        byHoster.set(hosterName, []);
      }
      byHoster.get(hosterName)?.push(episode);
    }

    return Array.from(byHoster.entries());
  };

  return (
    <section
      id="show-data"
      class="flex flex-col justify-center align-center p-6 max-w-screen-md mx-auto"
    >
      <h1>{name}</h1>
      <p>{description}</p>
      <AniflixImage
        filename={cover}
      />

      {/* Do not use table output, but a simple list of links instead - better for copying */}
      {
        /* <table class="my-6">
        <thead>
          <tr class="text-left">
            <th>Season</th>
            <th>Episode</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr>
              <td>Season {episode.seasonNumber}</td>
              <td>Episode {episode.episodeNumber}</td>
              <td>{episode.name}</td>
            </tr>
          ))}
        </tbody>
      </table> */
      }

      {bySeasonArray.map(([seasonKey, val]) => (
        <div>
          <h1 class="text-3xl font-bold my-6">Season {seasonKey}</h1>

          {byHosterArray(val).map(([hosterKey, val]) => (
            <>
              <h2 class="text-2xl font-bold mt-6 mb-3">{hosterKey} - Season {seasonKey}</h2>
              <pre class="bg-slate-200 dark:bg-slate-900 p-4">
              {val.map((episode) => <p>{episode.videoUrl}</p>)}
              </pre>
            </>
          ))}
        </div>
      ))}
    </section>
  );
}

// {byHosterArray.map(([key, val]) => (
//   <div>
//     <h2>{key}</h2>
//     <pre>
//       {val.map((episode) => (              <p>episode.url</p>            ))            }
//     </pre>
//   </div>
// )}
