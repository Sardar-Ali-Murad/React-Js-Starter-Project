import express from 'express';
const router = express.Router();

// If we need the rater limiter then we use them same is for the text user
// import rateLimiter from 'express-rate-limit';
// const apiLimiter = rateLimiter({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 10,
//   message: 'Too many requests from this IP, please try again after 15 minutes',
// });

import {
  register,
  login,
  updateUser,
  getCurrentUser,
  logout,
  updatePassord,
  updateImage,
  forgotPassword,
  resetPassword
} from '../controllers/authController.js';
import uploadImage from "../controllers/UploadImage.js"
import authenticateUser from '../middleware/auth.js';
import testUser from '../middleware/testUser.js';
router.route('/register').post( register);
router.route('/login').post(login);
router.get('/logout', logout);
router.route('/uploadImage').post( uploadImage);
router.route('/updateImage').post( authenticateUser,updateImage);
router.route("/updatePassword").post(authenticateUser,updatePassord)
router.route('/updateUser').patch(authenticateUser, testUser, updateUser);
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser);
router.route('/forgetPassword').post(forgotPassword);
router.route('/resetPassword').post(resetPassword);

export default router;
