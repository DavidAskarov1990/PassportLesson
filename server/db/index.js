const config = require('../config');
const mongoose = require('mongoose');

mongoose.Promise = Promise;
module.exports = mongoose.connect(config.get('mongoose:uri'), async () => {
    console.log('Connection db mongo...');
});
