import { IS_BROWSER } from "$fresh/runtime.ts";
import { computed, signal, useComputed } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { SSEEvent } from "sse_codec";

let messages = signal<SSEEvent[]>([]);

// Having this SSE Setup Code outside the component
// fixes that eventsource might be recreated at re-rendering of this component!
if (IS_BROWSER) {
  messages = signal<SSEEvent[]>([]);

  const addMessage = (msg: MessageEvent<any>) => {
    const newArray = [...messages.value, {
      id: msg.lastEventId,
      data: msg.data,
      eventName: msg.type,
    }];
    messages.value = newArray;
  };

  const source = new EventSource("/streaming/custom");

  source.addEventListener("open", () => console.log(`SSE Stream Opened!`));

  source.addEventListener("message", (msg) => {
    console.log(`SSE Stream received message`, msg);
    addMessage(msg);
  });

  // source.addEventListener("tick", (msg) => {
  //   console.log(`SSE Stream received 'tick' event`, msg);
  //   addMessage(msg);
  // });

  source.addEventListener(
    "error",
    (err) => console.error(`SSE Stream had error`, err),
  );
}

export function SSEDebug() {
  if (!IS_BROWSER) return <div></div>;

  const messageList = useComputed(() => {
    // console.debug(messages.value);
    return messages.value.map((msg: SSEEvent) => (
      <div>
        <p>Event: {msg?.eventName ?? "undefined"}</p>
        <p>ID: {msg?.id ?? "undefined"}</p>
        <p>Data: {msg?.data ?? "undefined"}</p>
      </div>
    ));
  });

  const messageCount = computed(() => messages.value.length);

  return (
    <>
      <h1>Message Count: {messageCount}</h1>
      <div>
        {messageList.value}
      </div>
    </>
  );
}
