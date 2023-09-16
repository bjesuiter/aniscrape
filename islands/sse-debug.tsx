import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { SSEEvent } from "sse_codec";

export function SSEDebug() {
  if (!IS_BROWSER) return <div></div>;

  const messages = signal<SSEEvent[]>([]);

  function addMessage(event: SSEEvent) {
    messages.value = [...messages.value, event];
  }

  // This useEffect should only run when component is created
  // This fixes that eventsource might be recreated at re-rendering of this component!
  useEffect(() => {
    const source = new EventSource("/streaming/custom");

    source.addEventListener("open", () => console.log(`SSE Stream Opened!`));

    source.addEventListener("message", (msg) => {
      console.log(`SSE Stream received message`, msg);
      addMessage(msg);
    });

    source.addEventListener("tick", (msg) => {
      console.log(`SSE Stream received 'tick' event`, msg);
      addMessage(msg);
    });

    source.addEventListener(
      "error",
      (err) => console.error(`SSE Stream had error`, err),
    );
  }, []);

  return (
    <div>
      {messages.value.map((msg: any) => (
        <div>
          <p>Event: {msg.eventName}</p>
          <p>ID: {msg.id}</p>
          <p>Data: {msg.data}</p>
        </div>
      ))}
    </div>
  );
}
