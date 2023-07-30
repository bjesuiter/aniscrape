import { AniflixImage } from "./AniflixImage.tsx";

export function AniflixShowRender(
  { name, description, cover, episodes }: {
    name: string;
    description: string;
    cover: string;
    episodes: {
      seasonNumber: number;
      episodeNumber: number;
      name: string;
    }[];
  },
) {
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

      <table class="my-6">
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
      </table>
    </section>
  );
}
