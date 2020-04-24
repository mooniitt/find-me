const http = require("http");
const fs = require("fs");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
  fs.createReadStream("./index.html").pipe(res);
});

server.listen(8686, () => {
  console.log("server is on port:8686");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
    // ws.send(message);
    wss.broadcast(message);
  });

  ws.send("let's talk!");
});

wss.broadcast = function broadcast(msg) {
  //服务端广播消息
  wss.clients.forEach(function each(client) {
    if (client.readyState == WebSocket.OPEN) {
      client.send(msg);
    }
  });
};
