const express = require('express');
const router = express.Router();
const { getWorksList, setWorksList, updateWorksList, deleteWorksList } = require('../../controllers/worksListController');

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


module.exports = router