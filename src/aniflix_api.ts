import { z } from "zod";

const aniflixBase = "https://www.aniflix.cc/";
const aniflixApi = "https://www.aniflix.cc/api/";

export const AniflixShow = z.object({
  name: z.string(),
  description: z.string(),
  cover_landscape: z.string(),
  cover_landscape_original: z.string(),
  seasons: z.array(z.object({})),
});
export type AniflixShow = z.infer<typeof AniflixShow>;

/**
 * An Aniflix show is the name for a TV series on aniflix.cc
 * @param showId
 * @returns
 */
export async function fetchShow(showId: string): Promise<AniflixShow> {
  const res = await fetch(aniflixApi + "show/" + showId).then((fetchResponse) =>
    fetchResponse.json()
  );

  return AniflixShow.parse(res);
}

export function getStorageUrl(filename: string) {
  return aniflixBase + "storage/" + filename;
}
