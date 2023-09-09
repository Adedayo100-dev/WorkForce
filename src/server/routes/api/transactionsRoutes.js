import express from 'express';
const router = express.Router();
import { getTransactions, setTransactions, updateTransactions, deleteTransactions } from '../../controllers/TransactionsController.js';


// GET, POST, PUT & DELETE
router.route('/').get(getTransactions).post(setTransactions)
router.route('/:id').put(updateTransactions).delete(deleteTransactions)


export default router