module.exports = {
    EMAIL_REGEXP: new RegExp(/\S+@\S+\.\S+/),
    PASSWORD_REGEXP: new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9]).{8,}$/),
    PHONE_REGEXP: new RegExp(/^\+?(38)?(\d{10,11})$/)
};
