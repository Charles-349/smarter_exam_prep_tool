import { createAppHandler } from "../server.js";

export function createHealthHandler(options) {
  return createAppHandler(options);
}

export default createHealthHandler();
