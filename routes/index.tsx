import { RouteContext } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import { Layout } from "../components/Layout.tsx";
import ClearCacheButton from "../islands/clear-cache-button.tsx";
import { fetchTargetAPI } from "@/src/scraper/fetch_target_api.ts";
import {
  AniflixShow,
  AniflixShowRender,
} from "@/components/AniflixShowRender.tsx";

export default async function Home(req: Request, ctx: RouteContext) {
  const searchParams = new URL(req.url).searchParams;
  const url = searchParams.get("url") ?? "";

  let showJson;
  let showData: AniflixShow | undefined;

  if (url !== "") {
    showJson = await fetchTargetAPI([url]);
    showData = AniflixShow.parse(showJson);
    // console.log(showJson);
  }

  // const count = useSignal(3);
  return (
    <Layout>
      <section
        id="search row"
        class="flex flex-row justify-center align-center p-6"
      >
        <form>
          <label for="base-url-input" class="self-center">Series URL</label>
          <input
            id="base-url-input"
            name="url"
            type="text"
            class="mx-4 p-1 text-slate-100 dark:text-slate-900 w-[500px]"
            value={url}
          >
          </input>

          <input type="submit" method="get" class="border-2 border-solid p-2">
          </input>
        </form>

        <ClearCacheButton />
      </section>

      <hr></hr>

      {showData && (
        <AniflixShowRender
          name={showData.name}
          description={showData.description}
          cover_landscape={showData.cover_landscape}
        />
      )}
    </Layout>
  );
}
