import { RouteContext } from "$fresh/server.ts";

export default async function Stream(_req: Request, _ctx: RouteContext) {
  let timer: number;
  const stream = new ReadableStream({
    start(controller) {
      timer = setInterval(() => {
        const body = `data: ${new Date()}\n\n`;
        controller.enqueue(body);
      }, 1000);
    },
    cancel() {
      clearInterval(timer);
    },
  });

  const body = stream.pipeThrough(new TextEncoderStream());

  return new Response(body, {
    headers: { "content-type": "text/event-stream" },
  });
}
