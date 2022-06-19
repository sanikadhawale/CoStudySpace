const express = require('express');
const {signup, signin, signout, forgotPassword, resetPassword} = require("../controllers/auth");
const {userSignupValidator, passwordResetValidator } = require('../validator');

const router = express.Router();

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
// password forgot and reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// signout
router.get('/signout', signout);

module.exports = router;