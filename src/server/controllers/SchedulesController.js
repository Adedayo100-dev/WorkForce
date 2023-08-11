const asyncHandler = require('express-async-handler');
const fs  = require('fs')

// @desc    Get Schedule
// @route   GET /api/schedule
// @access  Private
const getSchedules = asyncHandler(async (req, res) => {

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
    // event tyes: work, appointment, reminder
})

module.exports = {
    getSchedules
}