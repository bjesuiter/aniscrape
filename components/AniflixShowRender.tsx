import { z } from "zod";
import { AniflixImage } from "./AniflixImage.tsx";

export const AniflixShow = z.object({
  name: z.string(),
  description: z.string(),
  cover_landscape: z.string(),
});

export type AniflixShow = z.infer<typeof AniflixShow>;

export function AniflixShowRender(
  { name, description, cover_landscape }: AniflixShow,
) {
  return (
    <section
      id="show-data"
      class="flex flex-col justify-center align-center p-6"
    >
      <h1>{name}</h1>
      <p>{description}</p>
      <AniflixImage
        filename={cover_landscape}
      />
    </section>
  );
}
