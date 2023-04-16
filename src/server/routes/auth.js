const express = require('express');
const passport = require('passport')
const router = express.Router();


//@desc    Auth with Google
//@route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

//@desc    Google Auth Callback
//@route   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('http://127.0.0.1:5173/user-profile');
<<<<<<< HEAD
    console.log(req.isAuthenticated(), "Google callback successful!")
=======
    console.log("Google callback successful!")
>>>>>>> 425148ffed216af13b23f428a7ed2a7b45042c10
});

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res, next) => {
    req.logout((error) => {
        if (error) {return next(error)}
        res.redirect('/');
        console.log("Logged out!");
    })
})

module.exports = router