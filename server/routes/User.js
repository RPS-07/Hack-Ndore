// Import the required modules
const express = require("express")
const router = express.Router()
// Import the required controllers and middleware functions
const {
  login,
  signUp,
  sendOTP,
  changePassword,
} = require("../controllers/Auth")
const {
  contactUsController 
} = require("../controllers/ContactUs")

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword")
//const { auth } = require("../middelwares/auth")
// Route for user login
router.post('/login',login);
//router.post("/login", login)
// Route for user signup
router.post("/signup", signUp)
//router.post('/signup', (req, res) => {
  //  signup
   //});
// Route for sending OTP to the user's email
router.post("/sendotp",sendOTP);
//router.post('/sendotp', (req, res) => {
 // sendotp
 //});
// Route for Changing the password
//router.post("/changepassword", auth, changePassword)
// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)
// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)
// Export the router for use in the main application
router.post('/reach/contact',contactUsController);
module.exports = router