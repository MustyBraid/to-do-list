const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require("path");
const database = path.join(__dirname, "../db/db.json");

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get('/notes', (req,res) => {
    let notes = fs.readFileSync(database, {encoding:'utf8', flag:'r'})
    //console.log(notes);
    res.send(notes);

})


router.post('/notes', (req,res) => {

    fs.readFile(database, function (err,data) {
        var json = JSON.parse(data);
        json.push(req.body);

    fs.writeFile(database, JSON.stringify(json), function(err){
        if (err) throw err;
        console.log('Added a note!');
    })
    })
    
});

router.delete('/notes', (req,res) => {
    console.log("woah, that's a delete call");

});

module.exports = router