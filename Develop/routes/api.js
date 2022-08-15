const express = require("express");

const router = express.Router();

router.get('/notes', (req,res) => {
    console.log("woah, that's a get call");
    

})


//router.post('/notes', (req,res) => {


//})

//router.delete('/notes', (req,res) => {


//})

module.exports = router