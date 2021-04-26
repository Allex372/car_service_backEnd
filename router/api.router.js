const router = require('express').Router();

const formRouter = require('./form.router');

router.use('/form', formRouter);

module.exports = router;
