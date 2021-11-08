import curry from "just-curry-it";

export interface AudioPlayer {
  play(sound: string);
}

export function createHandler(player: AudioPlayer) {
  return (evt: any) => {
    player.play("my-sound");
    console.log("some other logic");
  };
}

function handler(player: AudioPlayer, evt: any) {
  player.play("my-sound");
  console.log("some other logic");
}

const createHandler2 = curry(handler, {} as AudioPlayer)();
