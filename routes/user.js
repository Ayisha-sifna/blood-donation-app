
var express = require('express');

var router = express.Router();

var mongoose = require("mongoose")
const bodyParser = require("body-parser")
const { createDoner, searchBlood, searchPlace, login, createapproval, searchPresident } = require("../controller/cont");
const { presidentAuthMiddleWare } = require("../Auth/presidentAuth")
router.post('/register', createDoner)
router.post('/login', login)
router.post("/searchBlood", presidentAuthMiddleWare, searchBlood)
router.post("/searchPlace", presidentAuthMiddleWare, searchPlace)
router.post('/president-signup', presidentAuthMiddleWare, createapproval)
router.post('/contact/search', searchPresident)

mongoose.connect("mongodb://127.0.0.1:27017/bloodDonation").then(() => {
  console.log("server started")
})

module.exports = router;
