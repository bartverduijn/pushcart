/* eslint-env node */
const express = require('express');
const path = require('path');
const adaro = require('adaro');

const dynamic = express();

const viewPath = path.join(__dirname, '..', '..', 'views');
const dustOptions = {
    cache: false,
    whitespace: true,
};

dynamic.engine('dust', adaro.dust(dustOptions));
dynamic.set('view engine', 'dust');
dynamic.set('views', viewPath);

dynamic.get('/', (req, res) => {
    res.send('Hello world! 👋');
});

module.exports = dynamic;
