const mongoose = require('mongoose');

const workSchema = mongoose.Schema(
    {
        loc: {
            type: String,
            required: [true, 'Please add a location value (model)']
        },
        time: {
            startDate: {
                type: String,
                required: [true, "please add start date"]
            },
            startTime: {
                type: String,
                required: [true, "please add start time"]
            },
            endDate: {
                type: String,
                required: [true, "please add end date"]
            },
            endTime: {
                type: String,
                required: [true, "please add end time"]
            },
            duration: {
                type: String,
                required: [true, "please add duration"]
            }
        },
        pay: {
            type: Number,
            required: [true, 'Please add a pay value (model)']
        },
        payStatus: {
            type: Boolean,
            required: [true, 'Please add a payStatus value (model)']
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

module.exports = mongoose.model('Work', workSchema)