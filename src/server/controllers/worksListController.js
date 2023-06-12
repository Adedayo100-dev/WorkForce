const asyncHandler = require('express-async-handler');
const Work = require('../models/workModel');
const { substractTime } = require('../middleware/timeHandling.js');
const { dateToString } = require('../middleware/formatDate.js');

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
    if (!req.body) {
        res.status(400)
        throw new Error('Pleae add a workList field');
    }
    const work = await Work.create({
        loc: req.body.inputLocation,
        time: {
            startDate: req.body.inputTime.startTime.slice(0, 10),
            startDateString: dateToString(req.body.inputTime.startTime.slice(0, 10)),
            startTime: req.body.inputTime.startTime.slice(11, 16),
            endDate: req.body.inputTime.stopTime.slice(0, 10),
            endTime: req.body.inputTime.stopTime.slice(11, 16),
            duration: substractTime(req.body.inputTime.stopTime, req.body.inputTime.startTime),
        },
        pay: req.body.inputPay,
        payStatus: req.body.inputPayStatus,
        description: req.body.inputDescription
    })

    res.status(200).json(work)
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

    const updatedWork = await Work.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.status(200).json(updatedWork)
})


// @desc    Delete WorksList
// @route   DELETE /api/workslist/:id
// @access  Private
const deleteWorksList = asyncHandler(async (req, res) => {
    const work = await Work.findById(req.params.id)

    if(!work){
        res.status(400)
        throw new Error('Work not found')
    }
    
    await work.remove()
    console.log(req.params.id, "deleted");

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getWorksList, setWorksList, updateWorksList, deleteWorksList
}