import { SuccessEventEmitter } from "./types";

export function handleEvent(handler: SuccessEventEmitter) {
  handler.onSuccess(() => console.log("success"));
}
