const express = require('express');
//const path = require('path');
const fs = require('fs');

const PORT = 3001;

const app = express();

// app.get('whatever', (req,res) => {

// });


// app.post(

// );


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});
// TO DO
// put request to add json objects to db.json
// get request to display contents of db.json within notes.html