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
router.get('/profile', ensureAuth, async (req, res) => {
    console.log("2. Well, this got touched");
    try {
        res.status(200).send({
            displayName: req.user.displayName,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            image: req.user.image,
        })
        //     const getWorksList = asyncHandler(async (req, res) => {
        //         const works = await Work.find()
        //         res.status(200).json(works);
        // })
<<<<<<< HEAD
        console.log("3. Tried Opening Profile API successful")
=======
        console.log("Tried Opening Profile API successful")
>>>>>>> 425148ffed216af13b23f428a7ed2a7b45042c10

    } catch (err) {
        console.log(err)
        console.log("Tried Opening Profile API unsuccessful")

    }
<<<<<<< HEAD
    
=======
>>>>>>> 425148ffed216af13b23f428a7ed2a7b45042c10
})


module.exports = router