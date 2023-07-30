import { curryCache, DenoKvStorageEngine } from "curry_cache";

export const targetApiCache = new DenoKvStorageEngine({
  name: "target-api-store",
});

export const fetchTargetAPI = curryCache(
  async (targetUrl: string): Promise<unknown> => {
    const url = new URL(targetUrl);
    const apiUrl = url.origin + "/api" + url.pathname + url.search;

    console.debug(
      `fetchTargetApi function was called with url "${targetUrl}"! (Should only happen after cache clear or with different url!)`,
    );
    return await fetch(apiUrl).then((fetchResponse) => fetchResponse.json());
  },
  {
    storageEngine: targetApiCache,
  },
);
