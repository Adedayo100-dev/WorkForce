import asyncHandler from 'express-async-handler';
import Work from '../models/workModel.js';
import { substractTime } from '../middleware/timeHandling.js';
import dateToString from '../middleware/formatDate.js';

// @desc    Get WorksList
// @route   GET /api/workslist
// @access  Private
export const getWorksList = asyncHandler(async (req, res) => {
    var queryParams = req.query; // Get the query parameters
    var works;
    if(Object.keys(queryParams).length == 0){
        works = await Work.find()
        // console.log("Works query is empty!");
    }
    else {
        const query = {
            name: { $regex: `.*${queryParams.keyword}.*`, $options: "i" } 
            //  name: queryParams.keyword 
        }
        works = await Work.find(query)
    }
    works = await Work.find()
    res.status(200).json(works);
})

// @desc    Set WorksList
// @route   POST /api/workslist
// @access  Private
export const setWorksList = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Pleae add a workList field');
    }

    const shiftsData = req.body.shifts.map(shift => ({
        company: shift.inputCompany,
        comment: shift.inputComment,
        location: shift.inputLocation,
        pay: shift.inputPay,
        payStatus: shift.inputPayStatus,
        time: {
          startDate: shift.inputTime.startTime.slice(0, 10),
          startTime: shift.inputTime.startTime.slice(11, 16),
          startDateString: {
            weekDay: "Tuesday",
            dayNum: 6,
            month: "June",
            year: 2023
            },
        //   startDateString: dateToString(shift.inputTime.startTime.slice(0, 10)),
          endDate: shift.inputTime.stopTime.slice(0, 10),
          endTime: shift.inputTime.stopTime.slice(11, 16),
          endDateString: {
            weekDay: "Tuesday",
            dayNum: 6,
            month: "June",
            year: 2023
            },
          duration: substractTime(shift.inputTime.stopTime, shift.inputTime.startTime)
        }
    }));

    const work = await Work.create({
        company: req.body.inputCompany,
        loc: req.body.inputLocation,
        pay: req.body.inputPay,
        payStatus: req.body.inputPayStatus,
        comment: req.body.inputComment,
        sameLocAndNameInfo: req.body.sameLocAndNameInfo,
        shifts: shiftsData
        // [
        //     {
        //         company: req.body.shifts.inputCompany,
        //         comment: req.body.shifts.inputComment,
        //         location: req.body.shifts.inputLocation,
        //         pay: req.body.shifts.inputPay,
        //         payStatus: req.body.shifts.inputPayStatus,
        //         time: {
        //             startDate: req.body.shifts.inputTime.startTime.slice(0, 10),
        //             startDateString: dateToString(req.body.shifts.inputTime.startTime.slice(0, 10)),
        //             startTime: req.body.shifts.inputTime.startTime.slice(11, 16),
        //             endDate: req.body.shifts.inputTime.stopTime.slice(0, 10),
        //             endTime: req.body.shifts.inputTime.stopTime.slice(11, 16),
        //             duration: substractTime(req.body.shifts.inputTime.stopTime, req.body.shifts.inputTime.startTime),
        //         }
        //     }
        // ] 
    })

    res.status(200).json(work)
})

// @desc    Update WorksList
// @route   PUT /api/workslist/:id
// @access  Private
export const updateWorksList = asyncHandler(async (req, res) => {
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
export const deleteWorksList = asyncHandler(async (req, res) => {
    const work = await Work.findById(req.params.id)

    if(!work){
        res.status(400)
        throw new Error('Work not found')
    }
    
    await work.remove()
    console.log(req.params.id, "deleted");

    res.status(200).json({id: req.params.id})
})


// module.exports = {
//     getWorksList, setWorksList, updateWorksList, deleteWorksList
// }