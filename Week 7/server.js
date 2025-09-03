// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (index.html)
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Receive message from client
  socket.on("chatMessage", (msg) => {
    console.log("Message received:", msg);
    // Send to all connected clients
    io.emit("chatMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
