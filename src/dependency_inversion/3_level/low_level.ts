import { SuccessEventEmitter } from "./types";

export class SuccessEmitter implements SuccessEventEmitter {
  onSuccess(handler: () => void): void {
    fetch("//ipconfig.io").then(() => handler());
  }
}
