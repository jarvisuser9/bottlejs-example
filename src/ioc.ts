function makeDecision(decider: () => boolean) {
  if (decider()) {
    console.log("true");
  } else {
    console.log("false");
  }
}
