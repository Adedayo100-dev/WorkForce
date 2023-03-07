// @desc    Get Transactions
// @route   GET /api/workslist
// @access  Private
const getTransactions = (req, res) => {
    res.status(200).json({message: 'Get Transactions'});
    // res.send(transactions);

}

// @desc    Set Transactions
// @route   POST /api/workslist
// @access  Private
const setTransactions = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Pleae add a text field');
    }
}

// @desc    Update Transactions
// @route   PUT /api/workslist/:id
// @access  Private
const updateTransactions = (req, res, next) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
    // const newTransactions = {
    //     id: transactions.length + 1,
    //     amount: req.body.amount,
    //     rate: req.body.rate
    // };
    // transactions.push(newTransactions);
    // res.send(transactions);
}

// @desc    Delete Transactions
// @route   DELETE /api/workslist
// @access  Private
const deleteTransactions = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
    // res.send(worksList);
}




module.exports = {
    getTransactions, setTransactions, updateTransactions, deleteTransactions
}