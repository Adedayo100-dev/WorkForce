import asyncHandler from 'express-async-handler';
import fs  from 'fs'
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
      
    // console.log('monthDays:', monthDays);

    // Old Code -------------------------------------------------

    fs.readFile("./db.json", "utf8", (err, data) => {
    var schedules;
        if (err) {
          console.log("Couldn't read file:", err);
          return;
        }
        try {
            let dbObj = JSON.parse(data);
            schedules = dbObj.schedule;
            res.status(200).json(schedules);
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
    })

    // ------------------------------------------------------------
    // event tyes: work, appointment, reminder

    res.status(200).json(monthDays);

})