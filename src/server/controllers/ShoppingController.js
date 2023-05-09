const asyncHandler = require('express-async-handler');
const {Debt, School} = require('../models/shoppingModel');


// @desc    Get ShoppingList
// @route   GET /api/workslist
// @access  Private
const getShoppingList = asyncHandler(async (req, res) => {

    const debts = [
        {name: "Rover"},
        {name: "Spot"},
        {name: "Biff"},
    ]

    const schools = [
        {name: "John"},
        {name: "Stacy"},
        {name: "Josie"},
    ]

    const newDebts = await Debt.create(debts)
    const newSchools = await School.create(schools)

    res.status(200).json({newDebts, newSchools});

    // const Shoppings = await Shopping.find();
    // res.status(200).json(Shoppings);

})

// @desc    Set ShoppingList
// @route   POST /api/workslist
// @access  Private
const setShoppingList = async (req, res) => {
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

// @desc    Update ShoppingList
// @route   PUT /api/workslist/:id
// @access  Private
const updateShoppingList = async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
    // res.send(worksList);
}

// @desc    Delete ShoppingList
// @route   DELETE /api/workslist
// @access  Private
const deleteShoppingList = async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
    // res.send(worksList);
}




module.exports = {
    getShoppingList, setShoppingList, updateShoppingList, deleteShoppingList
}