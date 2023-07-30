import { RouteContext } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import ClearCacheButton from "../islands/clear-cache-button.tsx";
import { AniflixShowRender } from "@/components/AniflixShowRender.tsx";
import { AniflixShow, fetchEpisode, fetchShow } from "@/src/aniflix_api.ts";
import { UiEpisode } from '@/src/types.ts';

export default async function Home(req: Request, ctx: RouteContext) {
  const searchParams = new URL(req.url).searchParams;
  const url = searchParams.get("url") ?? "";

  let showJson;
  let showData: AniflixShow | undefined;

  const episodes: UiEpisode[] = [];

  if (url !== "") {
    const targetUrl = new URL(url);
    const showName = targetUrl.pathname.split("/").pop();
    if (!showName) throw new Error("Invalid URL");
    showData = await fetchShow([showName]);

    for (const season of showData.seasons) {
      for (const episode of season.episodes) {
        const episodeData = await fetchEpisode([{
          showName,
          seasonNumber: season.number,
          episodeNumber: episode.number,
        }]);

        for (const stream of episodeData.streams) {
          episodes.push({
            seasonNumber: season.number,
            episodeNumber: episode.number,
            name: episode.name,
            hosterName: stream.hoster.name,
            hosterId: stream.hoster.id,
            videoUrl: stream.link,
          });
        }
      }
    }
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
          cover={showData.cover_landscape_original}
          episodes={episodes}
        />
      )}
    </Layout>
  );
}
