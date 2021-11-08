import Jukebox from "./Jukebox";

export function someHandler(evt: any) {
  Jukebox.play("my-sound");
  console.log("some other logic");
}
