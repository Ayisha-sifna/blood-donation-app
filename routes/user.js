
var express = require('express');

var router = express.Router();

var mongoose = require("mongoose")
const bodyParser = require("body-parser") 
const {createDoner,searchBlood, searchPlace, login, createapproval, searchPresident} = require("../controller/cont");
/* GET home page. */
router.post('/register', createDoner)
router.post('/login',login)
router.post("/login/searchBlood",searchBlood)
router.post("/login/searchPlace",searchPlace)
router.post('/login/signup',createapproval)
router.post('/contact/search',searchPresident)

mongoose.connect("mongodb://127.0.0.1:27017/bloodDonation").then(()=>{
  console.log("server started")
})

module.exports = router;
