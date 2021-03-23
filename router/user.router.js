const router = require('express').Router();
const { userController } = require('../controller');
const { userMiddleware, authMiddleware: { checkAccessTokenMiddleware } } = require('../middleware');

router.get('/', checkAccessTokenMiddleware, userController.getAllUsers);

router.get('/:id', userController.getSingleUser);

router.delete('/:id', userController.deleteSingleUser);

router.post('/',
    // fileMiddleware.checkFile,
    // fileMiddleware.checkAvatarLength,
    // fileMiddleware.checkDocumentLength,
    // fileMiddleware.checkVideoLength,
    // userMiddleware.isLoginExisted,
    userMiddleware.isEmailCreated,
    userMiddleware.isUserValid,
    userController.createUser);

module.exports = router;
