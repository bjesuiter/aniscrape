import { RouteContext } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import { Layout } from "../components/Layout.tsx";

export default function Home(req: Request, ctx: RouteContext) {
  const searchParams = new URL(req.url).searchParams;

  const count = useSignal(3);
  return (
    <Layout>
      <form
        id="search row"
        class="flex flex-row justify-center align-center p-6"
      >
        <label for="base-url-input" class="self-center">Series URL</label>
        <input
          id="base-url-input"
          name="url"
          type="text"
          class="mx-4 p-1 text-slate-100 dark:text-slate-900 w-[500px]"
          value={searchParams.get("url") ?? ""}
        >
        </input>

        <input type="submit" method="get" class="border-2 border-solid p-2">
        </input>
      </form>
    </Layout>
  );
}
