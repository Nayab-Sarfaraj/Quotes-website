const User = require("../models/userSchema");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const isAuthenticated = async function (req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return next(new ErrorHandler("Token not found ", 400));
    const decodedData = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedData.id);
    if (!user) return next(new ErrorHandler("Invalid token ", 400));
    req.user = user;
    next();
  } catch (error) {
    console.log("error while authenticating the user : " + error);
    return next(new ErrorHandler(error.message, 401));
  }
};
const authenticateRole = async function (req, res, next) {
  try {
    const id = req.user._id;
    const user = await User.findById(id);
    if ((!user))
      return next(
        new ErrorHandler("You are not authorized to acccess the resources", 400)
      );
      if(!user.isAdmin)return next(
        new ErrorHandler("You are not authorized to acccess the resources", 400)
      );
      
    
    next();
  } catch (error) {
    console.log("error while authenticating the user : " + error);
    return next(new ErrorHandler(error.message, 401));
  }
};

module.exports = { isAuthenticated, authenticateRole };
