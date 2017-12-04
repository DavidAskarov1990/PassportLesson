/**
 * Created by david on 04.12.17.
 */

module.exports = function (app, passport) {
    const handler = require('./controllers')(passport);

    app.post('/login', handler.auth.loginLolac);
};
