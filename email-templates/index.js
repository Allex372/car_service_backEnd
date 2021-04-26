const { emailActions } = require('../constant');

module.exports = {
    [emailActions.WELCOME]: {
        templateName: 'welcome',
        subject: 'Welcome on board'
    },
    [emailActions.USER_DELETED]: {
        templateName: 'delete',
        subject: 'Your Account was deleted'
    },
    [emailActions.STATISTIC]: {
        templateName: 'statistic',
        subject: 'Stats'
    },
    [emailActions.NEW_USER]: {
        templateName: 'new_user',
        subject: 'information'
    }
};
