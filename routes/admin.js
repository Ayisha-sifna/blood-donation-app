
var express = require('express');

var router = express.Router();

var mongoose = require("mongoose")
const bodyParser = require("body-parser") 
const { bloodCategory, totalSignUp, login, deletePresident, deletedoner, approvalList, approve, deletelist, searchDoner, searchapproval, changePassword } = require("../controller/admincont");
const { searchPresident } = require('../controller/cont');
/* GET home page. */
router.post('/login',login)
router.post('/login/total/blood', bloodCategory)
router.post('/login/totalsignup',totalSignUp)
router.get('/',async(req,res)=>{
  res.send("admin")
})
router.delete("/login//totalsignup/delete/:id",deletePresident)
router.delete("/login/total/blood/:id",deletedoner)
router.post("/login/approvallist",approvalList)
router.post("/login/approvallist/approve/:id",approve,deletelist)
router.post("/login/approvallist/delete",deletelist)
router.post('/login/totalsignup/searchpresident',searchPresident)
router.post('/login/total/blood/searchdoner',searchDoner)
router.post("/login/approvallist/search",searchapproval)

router.post("/login/changepassword",changePassword)
mongoose.connect("mongodb://127.0.0.1:27017/bloodDonation").then(()=>{
  console.log("server started")
})

module.exports = router;
