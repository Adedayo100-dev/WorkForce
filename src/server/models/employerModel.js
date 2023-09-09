// Add main pay to be predicted for the user based on the scheduled shift time
import mongoose from 'mongoose';

const employerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add an employer name value']
        },
        contacted: {
            type: Boolean,
            required: [true, 'Please add a contacted value']
        },
        registered: {
            type: Boolean,
            required: [true, 'Please add a registered value']
        },
        employed: {
            type: Boolean,
            required: [true, 'Please add your employment status']
        },
        pay: {
            morning: {
                type: Number,
                required: [true, 'Please add a pay value']
            },
            afternoon: {
                type: Number,
                required: [true, 'Please add a pay value']
            },
            night: {
                type: Number,
                required: [true, 'Please add a pay value']
            }
            
        },
        time: {
            morning: {
                startTime: {
                    type: String,
                    required: [true, 'Please add a time value']
                },
                stopTime: {
                    type: String,
                    required: [true, 'Please add a time value']
                }  
            },
            afternoon: {
                startTime: {
                    type: String,
                    required: [true, 'Please add a time value']
                },
                stopTime: {
                    type: String,
                    required: [true, 'Please add a time value']
                }  
            },
            night: {
                startTime: {
                    type: String,
                    required: [true, 'Please add a time value']
                },
                stopTime: {
                    type: String,
                    required: [true, 'Please add a time value']
                }  
            }
        },
        description: {
            type: String,
            required: [true, 'Please add a description value']
        }
    },
    {
       timestamps: true, 
    }
)

const Employer = mongoose.model('Employer', employerSchema);

export default Employer;