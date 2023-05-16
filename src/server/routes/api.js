const express = require('express')
const router = express.Router()

router.use('/worksList',  require('./api/worksRoutes'))
router.use('/shopping',  require('./api/shoppingRoutes'))
router.use('/transactions',  require('./api/transactionsRoutes'))
router.use('/employers',  require('./api/employersRoutes'))

module.exports = router;