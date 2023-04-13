const router = require('express').Router();

const { blogPostController } = require('../controllers');

const { auth, blogPostValidations } = require('../middlewares');

router.get('/', auth.isTokenValid, blogPostController.getAllPosts);

router.post(
'/', 
blogPostValidations.isFieldsFilled,
blogPostValidations.isCategIdValid, 
auth.isTokenValid, 
blogPostController.createBlogPost,
);

router.get('/search', auth.isTokenValid, blogPostController.getPostSearch);

router.get('/:id', auth.isTokenValid, blogPostController.getPostById);

router.put(
'/:id', 
blogPostValidations.isFieldsFilled,
blogPostValidations.isPostIdValid, 
auth.isTokenValid, 
blogPostController.updatePost,
);

router.delete(
'/:id', 
blogPostValidations.isPostIdValid,
auth.isTokenValid, 
blogPostController.deletePost,
);

module.exports = router;