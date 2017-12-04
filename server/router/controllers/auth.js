/**
 * Created by david on 04.12.17.
 */

module.exports = function (passport) {
    let controller = {};

    controller.loginLolac = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login',  failureFlash: true });

    return controller;
};