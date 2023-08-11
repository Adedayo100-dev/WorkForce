const express = require('express');
const router = express.Router();
const { getSchedules } = require('../../controllers/SchedulesController.js');


// GET, POST, PUT & DELETE
router.route('/').get(getSchedules)
// .post(setSchedules)
// router.route('/:id').put(updateSchedules).delete(deleteSchedules)

module.exports = router