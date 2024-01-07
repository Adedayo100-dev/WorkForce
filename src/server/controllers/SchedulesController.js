import asyncHandler from 'express-async-handler';
import { createMonthDays } from '../utils/getDays.js'

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
      
    var monthDays = createMonthDays(queryParams);
      
    console.log('monthDays:', monthDays);


    // ------------------------------------------------------------
    // event tyes: work, appointment, reminder

    res.status(200).json(monthDays);

})