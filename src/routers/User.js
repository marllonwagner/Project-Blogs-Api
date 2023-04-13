const router = require('express').Router();

const { userController } = require('../controllers');

const { auth, userValidations } = require('../middlewares');

router.post(
'/', 
userValidations.isNameValid, 
userValidations.isEmailValid,
userValidations.isPasswordValid, 
userValidations.isEmailExists, 
userController.createUser,
);

router.get('/', auth.isTokenValid, userController.getAllUsers);

router.get('/:id', auth.isTokenValid, userController.getUserById);

router.delete('/me', auth.isTokenValid, userController.deleteMe);

module.exports = router;