import { simpleCallbackTarget, timerSource } from "rx_webstreams";
import { SSEStream } from "sse_codec";

export default async function StreamingResponseTest() {
  const timer = timerSource({
    intervalInMilliseconds: 1000,
    maxEventCount: 1000,
  });

  const sseStream = new SSEStream();

  await timer.pipeTo(simpleCallbackTarget((timerTick) => {
    console.log(timerTick);
    sseStream.emit({
      eventName: "tick",
      id: Math.random() + "",
      data: timerTick + "",
    });
  }));

  return new Response(sseStream.readableStream, {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
}
