import express from 'express';
const router = express.Router();
import { getSchedules, setSchedules , deleteSchedules} from '../../controllers/SchedulesController.js';


// GET, POST, PUT & DELETE
router.route('/').get(getSchedules).post(setSchedules)
router.route('/:id').delete(deleteSchedules)
// .put(updateSchedules)

export default router