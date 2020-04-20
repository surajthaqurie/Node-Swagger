const express = require('express');
const app = express(express);

const endpoints = require('./endpoints');
endpoints(app);

const swaggerDoc = require('./swaggerDoc');
swaggerDoc(app);

app.use((err, req, res, next) => {
    console.log('there was an error', err);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App Started at port ${port}`));