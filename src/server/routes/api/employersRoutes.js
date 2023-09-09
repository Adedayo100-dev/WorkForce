import express from 'express';
const router = express.Router();
import { getEmployers, setEmployers, updateEmployers, deleteEmployers } from '../../controllers/EmployersController.js';


// GET, POST, PUT & DELETE
router.route('/').get(getEmployers).post(setEmployers)
router.route('/:id').put(updateEmployers).delete(deleteEmployers)


export default router