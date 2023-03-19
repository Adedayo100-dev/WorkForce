const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest} = require('../middleware/auth')

// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    res.redirect("http://127.0.0.1:5173/login")
    // res.send('Hello World of Dayo! This is all API | Login')
})

// @desc    Profile
// @route   GET /profile
router.get('/profile', ensureAuth, (req, res) => {
    res.send('Profile', {
        name: req.user.firstName,
    })
})


module.exports = router