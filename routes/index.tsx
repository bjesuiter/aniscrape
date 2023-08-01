import { RouteContext } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import ClearCacheButton from "../islands/clear-cache-button.tsx";
import { AniflixShowRender } from "@/components/AniflixShowRender.tsx";
import { AniflixShow, fetchEpisode, fetchShow } from "@/src/aniflix_api.ts";
import { EpisodeRequest, UiEpisode } from "@/src/types.ts";
import pMap from "p-map";

export default async function Home(req: Request, ctx: RouteContext) {
  const searchParams = new URL(req.url).searchParams;
  const url = searchParams.get("url") ?? "";

  let showJson;
  let showData: AniflixShow | undefined;

  let episodes: UiEpisode[] = [];

  if (url !== "") {
    console.time("homepage_with_url");

    const targetUrl = new URL(url);
    const pathSegments = targetUrl.pathname.split("/");

    const indexOfShow = pathSegments.findIndex((e) => e === "show");
    if (indexOfShow === -1) {
      return new Response("", {
        status: 400,
        statusText:
          "Your url does not contain the word 'show'. This probably meany you've not copied an aniflix url of a show page or one of it's sub pages!",
      });
    }

    const showName = pathSegments[indexOfShow + 1];
    if (!showName) {
      return new Response("", {
        status: 400,
        statusText:
          "Your url does not contain a show name after /show/... . This probably meany you've not copied an aniflix url of a show page or one of it's sub pages!",
      });
    }

    // fetch show data
    showData = await fetchShow([showName]);

    // assemble episodeRequests
    const episodeRequests: EpisodeRequest[] = [];
    for (const season of showData.seasons) {
      for (const episode of season.episodes) {
        episodeRequests.push({
          showName,
          seasonNumber: season.number,
          episodeNumber: episode.number,
        });
      }
    }

    // assemble async mapper for episode requests
    const mapper = async (episodeRequest: EpisodeRequest) => {
      const episodeData = await fetchEpisode([episodeRequest]);
      return { ...episodeData, request: episodeRequest };
    };

    // split one rawEpisode into n UiEpisodes, depending on how many streaming services are available
    // rawEpisode === contains data for all streaming providers
    // UiEpisode === the episode on exactly one provider
    const rawEpisodes = await pMap(episodeRequests, mapper, {
      concurrency: 1,
    });

    episodes = rawEpisodes.reduce<UiEpisode[]>(
      (aggregate, rawEpisode) => {
        if (!rawEpisode?.streams || !rawEpisode?.name) {
          console.warn(`Missing data for episode`, rawEpisode.request);
          return aggregate;
        }

        for (const stream of rawEpisode?.streams ?? []) {
          aggregate.push({
            seasonNumber: rawEpisode.request.seasonNumber,
            episodeNumber: rawEpisode.request.episodeNumber,
            name: rawEpisode.name,
            hosterName: stream.hoster.name,
            hosterId: stream.hoster.id,
            videoUrl: stream.link,
          });
        }
        return aggregate;
      },
      [],
    );

    console.timeEnd("homepage_with_url");
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
