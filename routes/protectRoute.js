const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res.status(401).send({ error: "Unauthorized - No Token Present" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res
        .status(401)
        .send({ error: "Unauthorized - Invalid token Can't Verify" });

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.status(401).send({ error: "Invalid user" });

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Authorization error" + error });
  }
};

module.exports = { protectRoute };
