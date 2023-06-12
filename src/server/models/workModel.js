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
            startDateString: {
                type: String,
                required: [true, "please add start date string"]
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
                years: {
                    type: Number,
                    // required: [true, "please add hour duration"]
                },
                months: {
                    type: Number,
                    // required: [true, "please add hour duration"]
                },
                days: {
                    type: Number,
                    // required: [true, "please add hour duration"]
                },
                hours: {
                    type: Number,
                    // required: [true, "please add hour duration"]
                },
                minutes: {
                    type: Number,
                    // required: [true, "please add minute duration"]
                }
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