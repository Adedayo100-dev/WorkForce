const asyncHandler = require('express-async-handler');
const Employer = require('../models/employerModel');


// @desc    Get Employer
// @route   GET /api/employer
// @access  Private
const getEmployers = asyncHandler(async (req, res) => {

    const employers = await Employer.find()
    res.status(200).json(employers);


})

// @desc    Set Employer
// @route   POST /api/employer
// @access  Private
const setEmployers = async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Pleae add a shopping field');
    }
    const shoppings = await Employer.create({
        name: req.body.inputName,
        contacted: req.body.inputContactStatus,
        registered: req.body.inputRegisterationStatus,
        employed: req.body.inputEmploymentStatus,
        pay:{
            morning: req.body.inputPay.morningPay,
            afternoon: req.body.inputPay.afternoonPay,
            night: req.body.inputPay.nightPay,
        }, 
        time: {
            morning:{
                startTime: req.body.inputTime.morning.inputStartTime,
                stopTime: req.body.inputTime.morning.inputStopTime,
            },
            afternoon: {
                startTime: req.body.inputTime.afternoon.inputStartTime,
                stopTime: req.body.inputTime.afternoon.inputStopTime,
            },
            night: {
                startTime: req.body.inputTime.night.inputStartTime,
                stopTime: req.body.inputTime.night.inputStopTime,
            }
        },
        description: req.body.inputDescription,
    })

    res.status(200).json(shoppings);
}

// @desc    Update Employer
// @route   PUT /api/employer/:id
// @access  Private
const updateEmployers = async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
    // res.send(employer);
}

// @desc    Delete Employer
// @route   DELETE /api/employer
// @access  Private
const deleteEmployers = async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
    // res.send(employer);
}




module.exports = {
    getEmployers, setEmployers, updateEmployers, deleteEmployers
}