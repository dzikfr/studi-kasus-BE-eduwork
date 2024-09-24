const { Router } = require('express');
const router = Router();
const deliveryController = require('./controller');
const {police_check} = require('../../middlewares/index');

router.get('/delivery-addresses', deliveryController.index);
router.post('/delivery-addresses', police_check('create', 'DeliveryAddress'), deliveryController.store);
router.put('/delivery-addresses/:id', police_check('update', 'DeliveryAddress'), deliveryController.update);
router.delete('/delivery-addresses/:id', police_check('delete', 'DeliveryAddress'), deliveryController.destroy);

module.exports = router;