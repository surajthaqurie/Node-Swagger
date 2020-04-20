const express = require('express');
const app = express(express);

const endpoints = require('./endpoints');
endpoints(app);

const swaggerDoc = require('./swaggerDoc');
swaggerDoc(app);

app.use((err, req, res, next) => {
    console.log('there was an error', err);
});


app.listen(3000, () => console.log('App Started'));