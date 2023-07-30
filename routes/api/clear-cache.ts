import { targetHtmlCache } from "@/src/scraper/fetch_target_html.ts";

export async function clearCache() {
  await targetHtmlCache.clearCache();
  return new Response("Finished");
}
