/* eslint-env node */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('./sw.js', require('./routes/sw'));
app.use('/static', require('./routes/static'));
app.use('/', require('./routes/dynamic'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
    console.log('Press Ctrl+C to quit.');
});
