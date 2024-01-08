import express from 'express';
const router = express.Router();
import { getSchedules, setSchedules } from '../../controllers/SchedulesController.js';


// GET, POST, PUT & DELETE
router.route('/').get(getSchedules).post(setSchedules)
// router.route('/:id').put(updateSchedules).delete(deleteSchedules)

export default router