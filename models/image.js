const mongoose = require("mongoose")

// creating model

const imgSchema = new mongoose.Schema({
    imgname: {
        type : String},
   
    
})


const image= mongoose.model("image",imageschema)

module.exports = image