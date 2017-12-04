const localStrategy = require('./localStrategy');

module.exports = (passport) => {
    localStrategy(passport)
};