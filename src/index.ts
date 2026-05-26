export default {
  async fetch(request: Request): Promise<Response> {

    const url = new URL(request.url);

    // Home Route
    if (url.pathname === "/") {
      return new Response("Telegram Manager Bot Running");
    }

    // Telegram Webhook
    if (url.pathname === "/webhook") {

      const update = await request.json();

      console.log("Telegram Update:", update);

      return new Response("OK");
    }

    return new Response("Not Found", {
      status: 404,
    });
  },
};