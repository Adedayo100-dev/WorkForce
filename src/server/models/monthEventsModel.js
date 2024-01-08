import mongoose from 'mongoose';

const monthEventsSchema = new mongoose.Schema(
    {
        date: { 
            dayNum: {
                type: Number,
                required: [true, 'Please add an dayNum value']
            },
            dayMonth: {
                type: Number,
                required: [true, 'Please add an dayMonth value']
            },
            dayYear: {
                type: Number,
                required: [true, 'Please add an dayYear value']
            }
        },
        events: {
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