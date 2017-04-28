'use strict';
const express = require('express');
const app = express();

const PORT = 8080;

app.get('/status', (req, res) => {
    res.send('ok');
});

app.get('/', (req, res) => {
    res.send('The force is strong with this one\n');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
