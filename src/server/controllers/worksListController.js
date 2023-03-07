// @desc    Get WorksList
// @route   GET /api/workslist
// @access  Private
const getWorksList = (req, res) => {
    res.status(200).json({message: 'Get WorksList'});
    // res.send(worksList);
}

// @desc    Set WorksList
// @route   POST /api/workslist
// @access  Private
const setWorksList = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Pleae add a text field');
    }
    // res.status(200).json({message: 'Set WorksList'});
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

// @desc    Update WorksList
// @route   PUT /api/workslist/:id
// @access  Private
const updateWorksList = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
    // res.send(worksList);
}

// @desc    Get WorksList
// @route   GET /api/workslist
// @access  Private
// const getWorksList = (req, res) => {
//     res.status(200).json({message: 'Get WorksList'});
//     res.send(worksList);
// }

// @desc    Delete WorksList
// @route   DELETE /api/workslist
// @access  Private
const deleteWorksList = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
    // res.send(worksList);
}




module.exports = {
    getWorksList, setWorksList, updateWorksList, deleteWorksList
}