const router = require("express").Router();
const {
  register,
  login,
  getUserProfile,
  logout,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");
router.route("/logout").get(logout);
router.route("/register").post(register);
router.route("/me").get(isAuthenticated, getUserProfile);
router.route("/login").post(login);

module.exports = router;
