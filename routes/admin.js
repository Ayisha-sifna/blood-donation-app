var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")
const bodyParser = require("body-parser")
const { bloodCategory, totalSignUp, login, deletePresident, deletedoner, approvalList, approve, deletelist, searchDoner, searchapproval, changePassword, addAds, addAdv, addAdd } = require("../controller/admincont");
const { searchPresident } = require('../controller/cont');
const { adminAuthMiddleWare } = require('../Auth/adminauth')
var path = require("path")
const add = require('../models/add')
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
router.post('/login', login)
router.post('/total/blood', adminAuthMiddleWare, bloodCategory)
router.post('/total-signup', totalSignUp)
router.delete("total-signup/delete/:id", adminAuthMiddleWare, deletePresident)
router.delete("/total/blood/:id", adminAuthMiddleWare, deletedoner)
router.post("/approval-list", adminAuthMiddleWare, approvalList)
router.post("/approval-list/approve/:id", adminAuthMiddleWare, approve, deletelist)
router.post("/approval-list/delete", adminAuthMiddleWare, deletelist)
router.post('/search-president', adminAuthMiddleWare, searchPresident)
router.post('/search-doner', searchDoner)
router.post("/approval-list/search", adminAuthMiddleWare, searchapproval)
router.post("/add-ads", adminAuthMiddleWare, upload.single('image'), addAdd)
router.post("/add-adv", adminAuthMiddleWare, upload.single('image'), addAdv)
router.post("/change-password", adminAuthMiddleWare, changePassword)

mongoose.connect("mongodb://127.0.0.1:27017/bloodDonation").then(() => {
  console.log("server started")
})

module.exports = router;
