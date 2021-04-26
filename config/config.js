module.exports = {
    PORT: process.env.PORT,
    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:4200;http://localhost:3000',

    ROOT_EMAIL: process.env.ROOT_EMAIL,
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD
};
