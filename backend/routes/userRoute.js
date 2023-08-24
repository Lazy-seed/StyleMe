const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserInfo,
  updateUser,
  allUsers,
  updateAddress1,
  generateOTP,
  updateUserPass,singleUser,deleteUser
} = require("../controllers/userController");

const {isAuthenticatedUser,authorizeRole} =require("../middleware/auth");

const router = express.Router();

//route of all user
router.route("/register").post(registerUser);

// login user
router.route("/login").post(loginUser);

// logout user
router.route("/logout").get(logout);

// user info
router.route("/me").get(isAuthenticatedUser,getUserInfo);

// user update
router.route('/me/update').put(isAuthenticatedUser,updateUser)

// user update password
router.route('/forgetPass').put(updateUserPass)
// user Address 1
router.route('/me/update/address1').put(isAuthenticatedUser,updateAddress1)

// all users
router.route('/admin/allUsers').get(allUsers)

//single user
router.route('/singleUser').post(singleUser)

//delete user
router.route('/deleteUser/:id').delete(deleteUser)


//mail
router.route('/sndMail/otp').post(generateOTP)

module.exports = router;
