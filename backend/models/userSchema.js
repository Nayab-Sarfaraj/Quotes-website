const mongoose = require("mongoose");
const bcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "passsword is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
userSchema.pre("save", async function (next) {
  try {
    const salt = await bcypt.genSalt(10);

    this.password = await bcypt.hash(this.password, salt);
    next();
  } catch (error) {
    console.log("error while hasing the password : " + error);
  }
});
userSchema.methods.generateToken = async function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
  return token;
};
userSchema.methods.comparePassword = async function (password) {
  const result = await bcypt.compare(password, this.password);

  return result;
};
const User = mongoose.model("user", userSchema);
module.exports = User;
