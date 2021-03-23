const router = require('express').Router();
const { UserAccess, AdminAccess } = require('../constant/constants');

const { studentController } = require('../controller');

const { authMiddleware, checkRoleMiddleware } = require('../middleware');

router.get('/', studentController.getAll);
router.post('/',
    authMiddleware.checkAccessTokenMiddleware,
    checkRoleMiddleware.checkAccess([
        AdminAccess
    ]),
    studentController.createStudent);

module.exports = router;
