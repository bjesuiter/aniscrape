import { z } from "zod";
import { AniflixImage } from "./AniflixImage.tsx";

export function AniflixShowRender(
  { name, description, cover }: {
    name: string;
    description: string;
    cover: string;
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
    </section>
  );
}
