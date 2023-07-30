import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Layout } from "../components/Layout.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <Layout>
      <section
        id="search row"
        class="flex flex-row justify-center align-center p-6"
      >
        <label for="base-url-input">Series URL</label>
        <input id="base-url-input" type="text" class="mx-4"></input>
      </section>
    </Layout>
  );
}
