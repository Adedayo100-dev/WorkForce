const asyncHandler = require('express-async-handler');
const {Employer} = require('../models/employerModel');


// @desc    Get Employer
// @route   GET /api/employer
// @access  Private
const getEmployer = asyncHandler(async (req, res) => {

    const employers = await Employer.find()
    res.status(200).json(employers);


})

// @desc    Set Employer
// @route   POST /api/employer
// @access  Private
const setEmployer = async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Pleae add a shopping field');
    }
    const shoppings = await Shopping.create({
        amount: req.body.inputAmount,
        rate: req.body.inputRate,
        time: {
            startDate: req.body.inputTime.inputDate,
            startTime: req.body.inputTime.inputTime,
        },
    })

    res.status(200).json(shoppings);
}

// @desc    Update Employer
// @route   PUT /api/employer/:id
// @access  Private
const updateEmployer = async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
    // res.send(employer);
}

// @desc    Delete Employer
// @route   DELETE /api/employer
// @access  Private
const deleteEmployer = async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
    // res.send(employer);
}




module.exports = {
    getEmployer, setEmployer, updateEmployer, deleteEmployer
}