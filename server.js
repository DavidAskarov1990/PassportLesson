'use strict';

console.log('Start');

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello!');
});

app.listen(4444, function () {
    console.log('Start some server port 4444')
});
