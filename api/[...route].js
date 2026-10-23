import { createAppHandler } from "../server.js";

const handleApiRequest = createAppHandler();

export default function handler(request, response) {
  return handleApiRequest(request, response);
}
