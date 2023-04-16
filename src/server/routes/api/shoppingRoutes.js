const express = require('express');
const router = express.Router();
const { getShoppingList, setShoppingList, updateShoppingList, deleteShoppingList } = require('../../controllers/ShoppingController.js');


// GET, POST, PUT & DELETE
router.route('/').get(getShoppingList).post(setShoppingList)
router.route('/:id').put(updateShoppingList).delete(deleteShoppingList)


module.exports = router