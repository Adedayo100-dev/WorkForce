const mongoose = require('mongoose');

const workSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value (model)']
            // const newWorksList = {
            //     id: worksList.length + 1,
            //     loc: req.body.inputLocation,
            //     dates: req.body.inputDate,
            //     pay: req.body.inputPay,
            //     payStatus: req.body.inputPayStatus,
            //     description: req.body.shiftDescription,
            // };
            // worksList.push(newWorksList);
            // res.send(worksList);
        }
    },
    {
       timestamps: true, 
    }
)

module.exports = mongoose.model('Work', workSchema)