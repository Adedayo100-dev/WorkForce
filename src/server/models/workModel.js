import mongoose from 'mongoose';

const timeSchema = new mongoose.Schema(
    {
        startDate: {
            type: String,
            required: [true, "please add start date"]
        },
        startTime: {
            type: String,
            required: [true, "please add start time"]
        },
        startDateString: {
            weekDay: {
                type: String,
                required: [true, "please add start dateString weekday"]
            },
            dayNum: {
                type: Number,
                required: [true, "please add start dateString dayNum"]
            },
            month: {
                type: String,
                required: [true, "please add start dateString month"]
            },
            year: {
                type: Number,
                required: [true, "please add start dateString year"]
            }
        },
        endDate: {
            type: String,
            required: [true, "please add end date"]
        },
        endTime: {
            type: String,
            required: [true, "please add end time"]
        },
        endDateString: {
            weekDay: {
                type: String,
                required: [true, "please add end dateString weekday"]
            },
            dayNum: {
                type: Number,
                required: [true, "please add end dateString dayNum"]
            },
            month: {
                type: String,
                required: [true, "please add end dateString month"]
            },
            year: {
                type: Number,
                required: [true, "please add end dateString year"]
            }
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
    }
);

const shiftSchema = new mongoose.Schema(
    {
        company: {
            type: String
        },
        comment: {
            type: String,
            // required: [true, 'Please add a comment value']
        },
        location: {
            type: String
        },
        // time: timeSchema,
        pay: {
            type: Number,
            // required: [true, 'Please add a pay value']
        },
        payStatus: {
            type: Boolean,
            // required: [true, 'Please add a payStatus value']
        },
        time: timeSchema,
    }
);

const workSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, 'Please add a company value.']
        },
        loc: {
            type: String,
            required: [true, 'Please add a location value (model)']
        },
        pay: {
            type: Number,
            required: [true, 'Please add a pay value']
        },
        payStatus: {
            type: Boolean,
            required: [true, 'Please add a payStatus value']
        },
        sameLocAndNameInfo:{
            type: Boolean,
            required: [true, 'Please add a sameLocAndNameInfo value']
        },
        shifts: [shiftSchema],
        comment: {
            type: String,
            required: [true, 'Please add a description value']
        }
    },
    {
       timestamps: true, 
    }
)

const Work = mongoose.model('Work', workSchema);

export default Work;