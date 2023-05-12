const asyncHandler = require('express-async-handler');
const {SchoolFee, Debt} = require('../models/transactionModel');
// const Transaction = require('../models/transactionModel');


// @desc    Get Transactions
// @route   GET /api/transactions
// @access  Private
const getTransactions = asyncHandler(async (req, res) => {

    ////////////////Query Debt///////////////////////
    var someDB = await
    Debt.aggregate([
        {
            $project: {
              _id: 0,
              totalSum:{
                $sum: "$amount"
              },
              totalMul: {
                $multiply: ['$amount', '$rate']
              }
            }
        },
        { 
            $group: { 
                _id: null, 
                totalDollarPaid: { 
                    $sum: "$totalSum" 
                },
                totalNairaPaid: {
                    $sum: "$totalMul"
                }
            } 
        }
    ]).then(result => {
        // console.log(result)
        return result[0]
    })
    .catch(error => {
        console.error(error);
    })
    console.log(someDB);

    //////////////////////////////////////

    const debts = {
        transactionsData : await Debt.find(),
        transactionsMeta: {
            name: "Debt",
            totalDollarPaid: someDB.totalDollarPaid, //2500
            totalNairaPaid: someDB.totalNairaPaid, //1324280
            nairaGoal: 1324280,
            paidPercentage: 100
        }
    }

    //////////////////Query SchoolFee/////////////////////
    var someSF = await
    SchoolFee.aggregate([
        {
            $project: {
              _id: 0,
              totalSum:{
                $sum: "$amount"
              },
              totalMul: {
                $multiply: ['$amount', '$rate']
              }
            }
        },
        { 
            $group: { 
                _id: null, 
                totalDollarPaid: { 
                    $sum: "$totalSum" 
                },
                totalNairaPaid: {
                    $sum: "$totalMul"
                }
            } 
        }
    ]).then(result => {
        return result[0];
    })
    .catch(error => {
        console.error(error);
    })
    console.log(someSF);

    //////////////////////////////////////
    
    const schoolFees = {
        transactionsData : await SchoolFee.find(),
        transactionsMeta: {
            name: "School Fee",
            totalDollarPaid: someSF.totalDollarPaid,
            totalNairaPaid: someSF.totalNairaPaid,
            nairaGoal: 3105000,
            paidPercentage: 51.55
        }
    }

    res.status(200).json({debts, schoolFees});
})


// @desc    Set Transactions
// @route   POST /api/transactions
// @access  Private
const setTransactions = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Pleae add a transaction field');
    }

    const debts = await Debt.create({
        amount: req.body.inputAmount,
        rate: req.body.inputRate,
        date: req.body.inputDate,
        medium: req.body.inputMedium,
        description: req.body.inputDescription
    })

    const schoolFees = await SchoolFee.create({
        amount: req.body.inputAmount,
        rate: req.body.inputRate,
        date: req.body.inputDate,
        medium: req.body.inputMedium,
        description: req.body.inputDescription
    })

    res.status(200).json({debts, schoolFees});
})

// @desc    Update Transactions
// @route   PUT /api/transactions/:id
// @access  Private
const updateTransactions = asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id)

    if(!transaction){
        res.status(400)
        throw new Error(`Transaction ${req.params.id} not found`)
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.status(200).json(updatedTransaction)
    // res.status(200).json({ message: `Update goal ${req.params.id}`})
})

// @desc    Delete Transactions
// @route   DELETE /api/transactions/:id
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