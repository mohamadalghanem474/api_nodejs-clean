const express = require('express');
const {
  signupValidator,
  loginValidator,
} = require('../utils/validators/authValidator');

const {
  signup,
  login,
  sendVerifyEmailCode,
  verifyEmail,
  forgotPassword,
  verifyPassResetCode,
  resetPassword,
} = require('../services/authService');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', loginValidator, login);
router.post('/sendVerifyEmail', sendVerifyEmailCode);
router.post('/verifyEmail', verifyEmail);
router.post('/forgotPassword', forgotPassword);
router.post('/verifyResetCode', verifyPassResetCode);
router.put('/resetPassword', resetPassword);

module.exports = router;
