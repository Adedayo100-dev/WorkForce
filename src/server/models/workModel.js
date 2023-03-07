const mongoose = require('mongoose');

const workSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value (model)']
        }
    },
    {
       timestamps: true, 
    }
)

module.exports = mongoose.model('Work', workSchema)