import express from 'express';
const router = express.Router();
import { getWorksList, setWorksList, updateWorksList, deleteWorksList } from '../../controllers/worksListController.js';

// Custom Variables
// var worksList;


// GET
// router.route('/').get(getWorksList).post(setWorksList)
router.get('/', getWorksList);

//POST
router.post('/', setWorksList)

//PUT
router.put('/:id', updateWorksList);

//DELETE
router.delete('/:id', deleteWorksList);


export default router