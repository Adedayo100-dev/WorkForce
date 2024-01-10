import mongoose from 'mongoose';

const monthEventsSchema = new mongoose.Schema(
    {
        date: { 
            start: {
                dayNum: {
                    type: Number,
                    required: [true, 'Please add a start dayNum value']
                },
                dayMonth: {
                    type: Number,
                    required: [true, 'Please add a start dayMonth value']
                },
                dayYear: {
                    type: Number,
                    required: [true, 'Please add a start dayYear value']
                }
            },
            end: {
                dayNum: {
                    type: Number,
                    required: [true, 'Please add a stop dayNum value']
                },
                dayMonth: {
                    type: Number,
                    required: [true, 'Please add a stop dayMonth value']
                },
                dayYear: {
                    type: Number,
                    required: [true, 'Please add a stop dayYear value']
                }
            }
        },
        data: {
            short_desc: {
                type: String,
                required: [true, "please add an event short description value"]
            },
            time: {
                start: {
                    type: String,
                    required: [true, "please add an event start time value"]
                },
                stop: {
                    type: String,
                    required: [true, "please add an event sop time value"]
                }
            },
            type: {
                type: String,
                required: [true, "please add an event type value"]
            }
        }
    },
    {
       timestamps: true, 
    }
)

const monthEvents = mongoose.model('monthEvents', monthEventsSchema);

export default monthEvents;