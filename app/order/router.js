const {Router} = require('express');
const router = Router();
const {police_check} = require('../../middlewares/index');
const orderController = require('./controller');

router.post('/orders', police_check('create', 'Order'), orderController.store);
router.get('/orders', police_check('view', 'Order'),orderController.index);

module.exports = router;