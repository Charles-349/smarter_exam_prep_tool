import { createAppHandler } from "../server.js";

export function createChatHandler(options) {
  return createAppHandler(options);
}

export default createChatHandler();
