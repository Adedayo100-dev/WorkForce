const asyncHandler = require('express-async-handler');
const Transaction = require('../models/transactionModel');


// @desc    Get Transactions
// @route   GET /api/workslist
// @access  Private
const getTransactions = asyncHandler(async (req, res) => {
    const Transactions = await Transaction.find();
    res.status(200).json(Transactions);
    // res.send(transactions);

})


// @desc    Set Transactions
// @route   POST /api/workslist
// @access  Private
const setTransactions = async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Pleae add a transaction field');
    }
    const transaction = await Transaction.create({
        amount: req.body.inputAmount,
        rate: req.body.inputRate,
        date: req.body.inputDate,
        medium: req.body.inputMedium,
        description: req.body.inputDescription
    })

    res.status(200).json(transaction);
}

// @desc    Update Transactions
// @route   PUT /api/workslist/:id
// @access  Private
const updateTransactions = async (req, res, next) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
    // const newTransactions = {
    //     id: transactions.length + 1,
    //     amount: req.body.amount,
    //     rate: req.body.rate
    // };
    // transactions.push(newTransactions);
    // res.send(transactions);
}

// @desc    Delete Transactions
// @route   DELETE /api/workslist/:id
// @access  Private
const deleteTransactions = asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id)

    if(!transaction){
        res.status(400)
        throw new Error('Transaction not found')
    }
    await transaction.remove()

    res.status(200).json({id: req.params.id, message: `Just deleted transaction ${req.params.id}`})
})




module.exports = {
    getTransactions, setTransactions, updateTransactions, deleteTransactions
}