import { serve } from "https://deno.land/std@0.88.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

for await (const request of server) {
  let bodyContent = "<h1>WebServer</h1>";

  request.respond({ status: 200, body: bodyContent });
}