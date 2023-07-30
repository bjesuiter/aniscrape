import { z } from "zod";
import { curryCache, DenoKvStorageEngine } from "curry_cache";

const aniflixBase = "https://www.aniflix.cc/";
const aniflixApi = "https://www.aniflix.cc/api/";
export const showCache = new DenoKvStorageEngine({
  name: "anflix-show-store",
});

export const episodeCache = new DenoKvStorageEngine({
  name: "anflix-episode-store",
});

export const AniflixShow = z.object({
  name: z.string(),
  description: z.string(),
  cover_landscape: z.string(),
  cover_landscape_original: z.string(),
  seasons: z.array(z.object({
    id: z.number(),
    number: z.number(),
    episodes: z.array(z.object({
      id: z.number(),
      number: z.number(),
      name: z.string(),
    })),
  })),
});
export type AniflixShow = z.infer<typeof AniflixShow>;

/**
 * An Aniflix show is the name for a TV series on aniflix.cc
 * @param showId
 * @returns
 */
export async function fetchShowUncached(showId: string): Promise<AniflixShow> {
  const url = aniflixApi + "show/" + showId;
  console.debug(
    `fetchShowUncached function was called with show-id "${showId}" which produces url "${url}"! (Should only happen after cache clear or with different url!)`,
  );
  const res = await fetch(url).then((fetchResponse) => fetchResponse.json());

  return AniflixShow.parse(res);
}

export const fetchShow = curryCache(
  fetchShowUncached,
  {
    storageEngine: showCache,
  },
);

export function getStorageUrl(filename: string) {
  return aniflixBase + "storage/" + filename;
}

const AniflixEpisode = z.object({
  id: z.number(),
  season_id: z.number(),
  name: z.string(),
  streams: z.array(z.object({
    id: z.number(),
    link: z.string(),
    hoster: z.object({
      id: z.number(),
      name: z.string(),
    }),
  })),
});

export function fetchEpisodeUncached(
  { showName, seasonNumber, episodeNumber }: {
    showName: string;
    seasonNumber: number;
    episodeNumber: number;
  },
) {
  const url =
    `${aniflixApi}episode/show/${showName}/season/${seasonNumber}/episode/${episodeNumber}`;

  const res = fetch(url).then((fetchResponse) => fetchResponse.json());
  return AniflixEpisode.parse(res);
}

export const fetchEpisode = curryCache(
  fetchEpisodeUncached,
  {
    storageEngine: episodeCache,
  },
);
