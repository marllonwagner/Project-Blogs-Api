const router = require('express').Router();

const { userLoginController } = require('../controllers');

// const { auth } = require('../middlewares');

router.post('/', userLoginController.userLogin);

module.exports = router;