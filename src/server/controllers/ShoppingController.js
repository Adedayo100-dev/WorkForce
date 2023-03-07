// @desc    Get ShoppingList
// @route   GET /api/workslist
// @access  Private
const getShoppingList = async (req, res) => {
    res.status(200).json({message: 'Get ShoppingList'});
    // res.send(shoppingList);

}

// @desc    Set ShoppingList
// @route   POST /api/workslist
// @access  Private
const setShoppingList = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Pleae add a text field');
    }
}

// @desc    Update ShoppingList
// @route   PUT /api/workslist/:id
// @access  Private
const updateShoppingList = async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}`})
    // res.send(worksList);
}

// @desc    Delete ShoppingList
// @route   DELETE /api/workslist
// @access  Private
const deleteShoppingList = async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
    // res.send(worksList);
}




module.exports = {
    getShoppingList, setShoppingList, updateShoppingList, deleteShoppingList
}