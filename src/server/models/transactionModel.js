import mongoose from 'mongoose';

const debtSchema = new mongoose.Schema(
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

const schoolFeeSchema = new mongoose.Schema(
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

const Debt = mongoose.model('Debt', debtSchema)
const SchoolFee = mongoose.model('SchoolFee', schoolFeeSchema)

export {Debt, SchoolFee}