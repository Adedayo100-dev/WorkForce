import asyncHandler from 'express-async-handler';
import { createMonthDays } from '../utils/createCalendar.js'
import monthEvents from '../models/monthEventsModel.js'
import { mapEventsToCalendar } from '../utils/mapEventsToCalendar.js'

// @desc    Get Schedule
// @route   GET /api/schedule
// @access  Private
export const getSchedules = asyncHandler(async (req, res) => {
    // Handle Month data
    // Convert year & month data type to number
    var queryParams = {
        month: +req.query.month,
        year: +req.query.year
    } // { year: 2023, month: 8 }
    
    // Create calendar
    var monthDays = createMonthDays(queryParams);
    
    // console.log('monthDays:', monthDays);

    // Get Month Events
    var monthEventsList = await monthEvents.find()
    // console.log(monthEventsList);

    // Map the shedule datasets to the calendar
    var schedule = mapEventsToCalendar(monthDays, monthEventsList);
    // console.log(schedule);


    // ------------------------------------------------------------
    // event tyes: work, appointment, reminder

    res.status(200).json(schedule);
     

})

// @desc    Set Schedule
// @route   POST /api/Sshedule
// @access  Private
export const setSchedules = asyncHandler(async (req, res) => {

    // Adding the time 'T' is compulsory to not cause confusing when the JS engine converts it to UTC
    const startDate = new Date(`${req.body.inputDayTime.start.date}T${req.body.inputDayTime.start.time}`); 
    const endDate = new Date(`${req.body.inputDayTime.stop.date}T${req.body.inputDayTime.stop.time}`);
    console.log(startDate, startDate.toLocaleTimeString('en-US'), req.body.inputDayTime.start.time);

    const schedule = await monthEvents.create({
        date: { 
            start: {
                dayNum: startDate.getDate(),
                dayMonth: startDate.getMonth(),
                dayYear: startDate.getFullYear(),
                time: req.body.inputDayTime.start.time
            },
            end: {
                dayNum: endDate.getUTCDate(),
                dayMonth: endDate.getUTCMonth(),
                dayYear: endDate.getUTCFullYear(),
                time: req.body.inputDayTime.stop.time
            }
        },
        data: {
            short_desc: req.body.inputName,
            type: req.body.inputEventType
        }
    })
    res.status(200).json(schedule);
})

// @desc    Delete Schedule
// @route   DELETE /api/schedule/:id
// @access  Private
export const deleteSchedules = asyncHandler(async (req, res) => {

    const schedule = await monthEvents.findById(req.params.id);

    if(!schedule){
        res.status(400)
        throw new Error('Schedule not found')
    }
    
    await monthEvents.deleteOne(schedule);

    res.status(200).json({ message: `Deleted Schedule ${req.params.id}`})


    // res.send(Schedule);
})