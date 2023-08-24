const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message:"Please Login to access this resource"
    });
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);
  console.log("user is saved in req.user");

  next();
};
