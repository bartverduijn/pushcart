/* eslint-env node */
const express = require('express');
const path = require('path');

const staticPath = path.join(__dirname, '..', '..', 'client');
const staticCache = { maxAge: 31536000000 };

module.exports = express.static(staticPath, staticCache);
