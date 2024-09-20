const express = require('express');
const {getBarrons,postBarrons} = require('../controller/barronsRouteController')
const app = express();
app.use(express.json());

// Middleware to parse URL-encoded request bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));


app.get('/',getBarrons);
app.post('/', postBarrons);




module.exports = app