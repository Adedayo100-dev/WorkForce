import express from 'express';
const router = express.Router();
import { getSchedules, getSchedule, setSchedules , deleteSchedules, updateSchedule} from '../../controllers/SchedulesController.js';


// GET, POST, PUT & DELETE
router.route('/').get(getSchedules).post(setSchedules)
router.route('/:id').get(getSchedule).delete(deleteSchedules).put(updateSchedule)
// .put(updateSchedules)

export default router