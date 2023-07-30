import { targetHtmlCache } from "@/src/scraper/fetch_target_html.ts";
import { Handlers } from "$fresh/server.ts";

// seems to not work => 405 - method not allowed error, despite sending a fetch with: fetch(`/api/clear-cache`, { method: "GET" })
// export async function clearCache() {
//   await targetHtmlCache.clearCache();
//   return new Response("Finished");
// }

export const handler: Handlers = {
  async GET(_req, _ctx) {
    await targetHtmlCache.clearCache();
    return new Response("Finished");
  },
};
