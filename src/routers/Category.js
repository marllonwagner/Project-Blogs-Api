const router = require('express').Router();

const { categoryController } = require('../controllers');

const { auth, categoryValidations } = require('../middlewares');

router.post(
'/', 
auth.isTokenValid, 
categoryValidations.isCatNameValid,
categoryController.createCateg,
);

router.get('/', auth.isTokenValid, categoryController.getAllCateg);

module.exports = router;