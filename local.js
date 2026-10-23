import { createAppServer } from "./server.js";

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";
const server = createAppServer();

server.listen(port, host, () => {
  console.log(`Cloudstep is running at http://${host}:${port}`);
  if (!process.env.GEMINI_API_KEY) {
    console.warn("Gemini is not configured. Add GEMINI_API_KEY to .env to enable live AI chat.");
  }
});
