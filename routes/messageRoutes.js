const express = require("express");
const {
  getMessages,
  sendMessage,
} = require("../controllers/messageController.js");
const { protectRoute } = require("./protectRoute.js");

const router = express.Router();

router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
