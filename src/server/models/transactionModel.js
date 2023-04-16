const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
    {
        amount: {
            type: Number,
            required: [true, 'Please add an amount value (model)']
        },
        rate: {
            type: Number,
            required: [true, "please add a rate value"]
        },
        date: {
            type: String,
            required: [true, 'Please add a date value (model)']
        },
        medium: {
            type: String,
            required: [true, 'Please add a medium value (model)']
        },
        description: {
            type: String,
            required: [true, 'Please add a description value (model)']
        }
    },
    {
       timestamps: true, 
    }
)

module.exports = mongoose.model('Transaction', transactionSchema)