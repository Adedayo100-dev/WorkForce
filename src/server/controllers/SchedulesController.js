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

    const startDate = new Date(req.body.inputDayTime.start.date);
    const endDate = new Date(req.body.inputDayTime.stop.date);
    console.log(startDate, startDate.getDate());

    const schedule = await monthEvents.create({
        date: { 
            start: {
                dayNum: startDate.getDate(),
                dayMonth: startDate.getMonth(),
                dayYear: startDate.getFullYear()
            },
            end: {
                dayNum: endDate.getDate(),
                dayMonth: endDate.getMonth(),
                dayYear: endDate.getFullYear()
            }
        },
        data: {
            short_desc: req.body.inputName,
            time: {
                start: req.body.inputDayTime.start.time,
                stop: req.body.inputDayTime.stop.time
            },
            type: req.body.inputEventType
        }
    })
    res.status(200).json(schedule);
})