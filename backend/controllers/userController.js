const User = require("../models/userSchema");

const ErrorHandler = require("../utils/errorHandler");
const saveToken = require("../utils/jwtToken");
const register = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    if (!email) return next(new ErrorHandler("email is reuired", 401));
    if (!username) return next(new ErrorHandler("username is rquired ", 401));
    if (!password) return next(new ErrorHandler("password is required", 401));
    const isExits = await User.findOne({ email: email });

    if (isExits) return next(new ErrorHandler("User already exist ", 401));
    const newUser = new User({ email, password, username });
    const savedUser = await newUser.save();
    return res.json(savedUser);
  } catch (error) {
    console.log("error while registering the user :: " + error);
    return next(new ErrorHandler(error.message, 400));
  }
};
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) return next(new ErrorHandler("email is reuired", 401));
    if (!password) return next(new ErrorHandler("password is required", 401));
    const user = await User.findOne({ email: email });
    if (!user) return next(new ErrorHandler("Invalid email or password", 401));
    const result = await user.comparePassword(password);
    console.log(result);
    if (!result)
      return next(new ErrorHandler("Invalid email or password", 400));
    saveToken(user, res, 200);
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id).select("-password");
    if (!user) return next(new ErrorHandler("Please login ", 401));
    return res.json({ success: true, user });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};
const logout = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    return res.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};
module.exports = {
  register,
  login,
  getUserProfile,
  logout,
};
