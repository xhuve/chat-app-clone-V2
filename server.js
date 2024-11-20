const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes.js");
const messageRoutes = require("./routes/messageRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const connectToMongoDb = require("./database/connectToMongoDB.js");
const { app, server } = require("./socket/socket.js");

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is running on port ${PORT}`);
});
