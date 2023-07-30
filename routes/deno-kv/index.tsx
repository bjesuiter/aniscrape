import { RouteContext } from "$fresh/server.ts";
import ClearCacheButton from "@/islands/clear-cache-button.tsx";

export default async function DenoKVPage(req: Request, ctx: RouteContext) {
  const kv = await Deno.openKv();

  // Return all curry-cache entries
  const iter = kv.list<string>({ prefix: ["curry-cache"] });
  const entries = [];
  for await (const res of iter) entries.push(res);

  return (
    <>
      <ClearCacheButton />
      <ul>
        {entries.map((entry) => <li>{entry.key} - {entry.value}</li>)}
      </ul>
    </>
  );
}
