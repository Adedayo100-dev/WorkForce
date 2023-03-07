const express = require('express');
const router = express.Router();

// Custom Variables
var worksList;


// GET

router.get('/', (req, res) => {
    res.status(200).json({message: 'Get WorksList'});
    // res.send(worksList);

});

router.get('/:id', (req, res) => {
    res.send(req.params.query);
});

//POST
router.post('/', (req, res, next) => {
    const newWorksList = {
        id: worksList.length + 1,
        loc: req.body.inputLocation,
        dates: req.body.inputDate,
        pay: req.body.inputPay,
        payStatus: req.body.inputPayStatus,
        description: req.body.shiftDescription,
    };
    worksList.push(newWorksList);
    res.send(worksList);
})

//PUT
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
});

//DELETE
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
});


module.exports = router