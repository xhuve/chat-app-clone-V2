const User = require("../models/userModel.js");

const getSidebarUsers = async (req, res) => {
  try {
    const loggedUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json({ error: "Internal server error" });
  }
};

module.exports = { getSidebarUsers };
