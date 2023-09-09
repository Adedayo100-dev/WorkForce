import express from 'express';
const router = express.Router();
import { getShoppingList, setShoppingList, updateShoppingList, deleteShoppingList } from '../../controllers/ShoppingController.js';


// GET, POST, PUT & DELETE
router.route('/').get(getShoppingList).post(setShoppingList)
router.route('/:id').put(updateShoppingList).delete(deleteShoppingList)


export default router