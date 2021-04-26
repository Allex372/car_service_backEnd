const Joi = require('joi');

const { regex } = require('../../constant');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(3).max(50)
        .required(),
    email: Joi.string().regex(regex.EMAIL_REGEXP).required(),
    phone: Joi.string().regex(regex.PHONE_REGEXP).required(),
    car: Joi.string().required(),
});
