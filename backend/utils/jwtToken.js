const saveToken = async (user, res, status) => {
  try {
    const token = await user.generateToken();
    res.cookie("token", token);
    const { password, ...filteredUser } = { ...user._doc };
    console.log(token);
    return res.status(status).json({
      success: true,
      filteredUser,
      token,
    });
  } catch (error) {
    console.log("error while setting the jwt token : " + error);
  }
};
module.exports = saveToken;
