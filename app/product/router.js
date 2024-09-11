// const router = require('express').Router();
// const multer = require('multer');
// const os = require('os');

// const productController = require('./controller');

// router.post('/products', multer({dest: os.tmpdir()}).single('image'), productController.store);

// module.exports = router;

"use strict";

const { Router } = require('express');
const multer = require('multer');
const os = require('os');
const productController = require('./controller');
const router = Router();
const upload = multer({ dest: os.tmpdir() });
router.post('/products', upload.single('image'), (req, res, next) => {
  try {
    productController.store(req, res);
  } catch (err) {
    next(err);
  }
});

module.exports = router;