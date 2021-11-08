import { AudioPlayer } from "./high_level";
import Jukebox from "./Jukebox";

export class JukeboxPlayer implements AudioPlayer {
  play(sound: string) {
    return Jukebox.play(sound);
  }
}
