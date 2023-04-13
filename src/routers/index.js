const router = require('express').Router();

const userLoginRouter = require('./UserLogin');
const userRouter = require('./User');
const categoryRouter = require('./Category');
const blogPostRouter = require('./BlogPost');

router.use('/login', userLoginRouter);

router.use('/user', userRouter);

router.use('/categories', categoryRouter);

router.use('/post', blogPostRouter);

module.exports = router;