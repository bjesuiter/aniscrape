import { IS_BROWSER } from "$fresh/runtime.ts";

export function SSEDebug() {
  if (!IS_BROWSER) return <div></div>;

  const source = new EventSource("/streaming/custom");

  source.onopen = () => console.log(`SSE Stream Opened!`);
  source.onmessage = (msg) => console.log(`SSE Stream received message`, msg);
  source.onerror = (err) => console.error(`SSE Stream had error`, err);

  return <div></div>;
}
