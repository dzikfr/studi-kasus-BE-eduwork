// const router = require('express').Router();
// const multer = require('multer');
// const os = require('os');
// const productController = require('./controller');

// router.post('/products', multer({dest: os.tmpdir()}).single('image'), productController.store);

const { Router } = require('express');
const multer = require('multer');
const os = require('os');
const productController = require('./controller');
const router = Router();
const upload = multer({ dest: os.tmpdir() });

router.get('/products', productController.index);

router.get('/products/:id', productController.getProductById);

router.post('/products', upload.single('image'), (req, res, next) => {
  try {
    productController.store(req, res);
  } catch (err) {
    next(err);
  }
});

router.put('/products/:id', upload.single('image'), (req, res, next) => {
  try {
    productController.update(req, res);
  } catch (err) {
    next(err);
  }
});

router.delete('/products/:id', productController.destroy);

module.exports = router;