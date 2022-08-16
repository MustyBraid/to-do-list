const express = require('express');
const path = require('path');
const app = express();

const apiRoute = require('./routes/api.js')
app.use('/api', apiRoute);

require('dotenv').config();
const PORT = process.env.PORT;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});

