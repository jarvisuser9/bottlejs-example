/**
 * In this example, the dependency is created/obtained inside of the function
 */
function coupledWebSocketUser() {
  const ws = new WebSocket("example.com");
  ws.onmessage = (evt) => console.log(evt.data);
}

/**
 * In this example, the dependency is injected into the code
 */
function decoupledWebSocketUser(wsFactory: (url: string) => WebSocket) {
  const ws = wsFactory("example.com");
  ws.onmessage = (evt) => console.log(evt.data);
}
