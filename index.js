const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

const io = new Server(server);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("updateScore", (data) => {
    io.emit("scoreUpdate", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.use("/score", require("./routers/scoreboard"));
