const express = require('express');
const passport = require('passport')
const router = express.Router();
// const { getWorksList, setWorksList, updateWorksList, deleteWorksList } = require('../controllers/worksListController');


//@desc    Auth with Google
//@route   GET /auth/google
router.get('/', passport.authenticate('google', { scope: ['profile'] }));




module.exports = router