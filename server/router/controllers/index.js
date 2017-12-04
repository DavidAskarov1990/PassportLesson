/**
 * Created by david on 04.12.17.
 */
const authController = require('./auth');

module.exports = function (passport) {
    return {
        auth: authController(passport)
    }
};
