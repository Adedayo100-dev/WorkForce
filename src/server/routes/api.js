import express from'express';
import worksRouter from './api/worksRoutes.js';
import shoppingRouter from './api/shoppingRoutes.js';
import transactionsRouter from './api/transactionsRoutes.js';
import employersRouter from './api/employersRoutes.js';
import scheduleRouter from './api/scheduleRoutes.js';
const router = express.Router()

router.use('/worksList',  worksRouter)
router.use('/shopping',  shoppingRouter)
router.use('/transactions',  transactionsRouter)
router.use('/employers',  employersRouter)
router.use('/schedule',  scheduleRouter )

export default router;