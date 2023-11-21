const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT);

app.get('/', (req, res) => {
    res.send('Welcome to Aniflics.com');
});