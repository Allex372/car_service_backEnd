const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const {
    PORT,
    MONGO_URL,
    ALLOWED_ORIGIN
} = require('./config/config');

const apiRouter = require('./router/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), 'static')));

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            customCode: err.customCode || 0,
            message: err.message || ''
        });
});

app.use('/', apiRouter);

app.listen(PORT, () => {
    console.log(`App ${PORT} in progress`);
});
