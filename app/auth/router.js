const { Router } = require('express');
const router = Router();
const authRouter = require('./controller');

router.post('/register', authRouter.register);

module.exports = router;