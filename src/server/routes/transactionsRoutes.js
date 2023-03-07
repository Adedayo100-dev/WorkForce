const express = require('express');
const router = express.Router();
const { getTransactions, setTransactions, updateTransactions, deleteTransactions } = require('../controllers/TransactionsController.js');


// GET, POST, PUT & DELETE
router.route('/').get(getTransactions).post(setTransactions)
router.route('/:id').put(updateTransactions).delete(deleteTransactions)


module.exports = router