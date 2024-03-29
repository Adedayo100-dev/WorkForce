import express from 'express';
import passport from 'passport';
const router = express.Router()
import { ensureAuth, ensureGuest} from '../middleware/auth.js'

// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    res.redirect("http://localhost/login")
    // res.send('Hello World of Dayo! This is all API | Login')
})

// @desc    Profile
// @route   GET /profile
router.get('/profile', passport.authenticate("jwt", { session: false }), async (req, res) => { //passport.authenticate("jwt", { session: false })
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
        console.log("3. Tried Opening Profile API successful")

    } catch (err) {
        console.log(err)
        console.log("Tried Opening Profile API unsuccessful")

    }
    
})


export default router