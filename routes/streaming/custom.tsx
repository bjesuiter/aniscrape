import { map, simpleCallbackTarget, timerSource } from "rx_webstreams";
import { encodeSSEEvent, SSEStream } from "sse_codec";

export default async function StreamingResponseTest() {
  const timer = timerSource({
    intervalInMilliseconds: 1000,
    maxEventCount: 1000,
  });

  // const sseStream = new SSEStream();

  const sseStream = timer.pipeThrough(map<number, string>((chunk: number) => {
    const encodedEvent = encodeSSEEvent({
      // TODO: Figure out why the F*** custom event names do not work at all! -_-
      // eventName: "message",
      id: crypto.randomUUID(),
      data: chunk + "",
    });

    console.log(encodedEvent);

    //     const encodedEvent = `event:tick
    // id:${crypto.randomUUID()}
    // data:${chunk + ""}

    //     `;

    return encodedEvent;
  }));

  // const promise = timer.pipeTo(simpleCallbackTarget((timerTick) => {
  //   console.log(timerTick);
  //   sseStream.emit({
  //     eventName: "tick",
  //     id: Math.random() + "",
  //     data: timerTick + "",
  //   });
  // }));

  // Body has to be a typed ArrayBufferView! => use TextEncoderStream to encode to UTF-8 Array (Uint8Array)
  const body = sseStream.pipeThrough(new TextEncoderStream());

  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}
