const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);
const io = new Server(server);

const userSocketMap = {};

const getRecieverSocketId = (recieverId) => {
  return userSocketMap[recieverId];
};

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const { userId } = socket.handshake.query;
  if (userId !== "undefined") userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { app, io, server, getRecieverSocketId };
