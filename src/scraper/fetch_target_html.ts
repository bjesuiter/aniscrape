import { curryCache, KvsMemoryStorageEngine } from "curry_cache";

export const targetHtmlCache = new KvsMemoryStorageEngine({
  name: "target-html-store",
});

export const fetchTargetHtml = curryCache(async (targetUrl: string) => {
  console.debug(
    `fetchTargetHtml function was called with url "${targetUrl}"! (Should only happen after cache clear or with different url!)`,
  );
  return await fetch(targetUrl).then((fetchResponse) => fetchResponse.text());
}, {
  storageEngine: targetHtmlCache,
});
