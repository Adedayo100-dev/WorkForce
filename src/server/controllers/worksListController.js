const asyncHandler = require('express-async-handler');
const Work = require('../models/workModel');

// @desc    Get WorksList
// @route   GET /api/workslist
// @access  Private
const getWorksList = asyncHandler(async (req, res) => {
    const works = await Work.find()
    res.status(200).json(works);
})

// @desc    Set WorksList
// @route   POST /api/workslist
// @access  Private
const setWorksList = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Pleae add a text field');
    }
    const work = await Work.create({
        text: req.body.text
    })

    res.status(200).json(work)
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
})

// @desc    Update WorksList
// @route   PUT /api/workslist/:id
// @access  Private
const updateWorksList = asyncHandler(async (req, res) => {
    const work = await Work.findById(req.params.id)

    if(!work){
        res.status(400)
        throw new Error('Work not found')
    }

    const updatedGoal = await Work.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.status(200).json(updatedGoal)
})

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
const deleteWorksList = asyncHandler(async (req, res) => {
    const work = await Work.findById(req.params.id)

    if(!work){
        res.status(400)
        throw new Error('Work not found')
    }
    await work.remove()

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getWorksList, setWorksList, updateWorksList, deleteWorksList
}