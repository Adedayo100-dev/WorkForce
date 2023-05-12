const express = require('express');
const router = express.Router();
const { getEmployers, setEmployers, updateEmployers, deleteEmployers } = require('../../controllers/EmployersController.js');


// GET, POST, PUT & DELETE
router.route('/').get(getEmployers).post(setEmployers)
router.route('/:id').put(updateEmployers).delete(deleteEmployers)


module.exports = router