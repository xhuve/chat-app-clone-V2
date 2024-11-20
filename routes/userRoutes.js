const express = require("express");
const { protectRoute } = require("./protectRoute.js");
const { getSidebarUsers } = require("../controllers/userController.js");

const router = express.Router();

router.get("/", protectRoute, getSidebarUsers);

module.exports = router;
