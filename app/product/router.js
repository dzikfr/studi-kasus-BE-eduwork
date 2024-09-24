const { Router } = require('express');
const multer = require('multer');
const os = require('os');
const productController = require('./controller');
const router = Router();
const upload = multer({ dest: os.tmpdir() });
const {police_check} = require('../../middlewares/index');

router.get('/products', productController.index);

router.get('/products/:id', productController.getProductById);

router.post('/products', 
  upload.single('image'), 
  police_check('create', 'Product'), 
  (req, res, next) => {
  try {
    productController.store(req, res);
  } catch (err) {
    next(err);
  }
});

router.put('/products/:id', 
  upload.single('image'),
  police_check('update', 'Product'),
  (req, res, next) => {
  try {
    productController.update(req, res);
  } catch (err) {
    next(err);
  }
});

router.delete('/products/:id', 
  police_check('delete', 'Product'), 
  productController.destroy);

module.exports = router;