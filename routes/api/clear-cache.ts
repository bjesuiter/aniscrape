import { targetHtmlCache } from "@/src/scraper/fetch_target_html.ts";
import { Handlers } from "$fresh/server.ts";
import { showCache } from "@/src/aniflix_api.ts";
import { targetApiCache } from "@/src/scraper/fetch_target_api.ts";

// seems to not work => 405 - method not allowed error, despite sending a fetch with: fetch(`/api/clear-cache`, { method: "GET" })
// export async function clearCache() {
//   await targetHtmlCache.clearCache();
//   return new Response("Finished");
// }

export const handler: Handlers = {
  async GET(_req, _ctx) {
    // clearCache of showCache seems to not be working, so I'll clean DenoKv myself for now
    await showCache.clearCache();
    const kv = await Deno.openKv();

    // Return all curry-cache entries & delete them!
    const iter = kv.list<string>({ prefix: ["curry-cache"] });
    for await (const res of iter) await kv.delete(res.key);

    await targetHtmlCache.clearCache();
    await targetApiCache.clearCache();

    return new Response("Finished");
  },
};
