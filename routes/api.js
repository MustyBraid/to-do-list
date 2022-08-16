const express = require("express");
const fs = require('fs');
const path = require("path");

const router = express.Router();

router.get('/notes', (req,res) => {
    let notes = fs.readFileSync(path.join(__dirname, "../db/db.json"), {encoding:'utf8', flag:'r'})
    //console.log(notes);
    res.send(notes);

})


router.post('/notes', (req,res) => {
    console.log("woah, that's a post call");

})

router.delete('/notes', (req,res) => {
    console.log("woah, that's a delete call");

})

module.exports = router