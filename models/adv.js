const mongoose = require("mongoose")
const imgSchema = new mongoose.Schema({
    imgname: {
        type: String
    },
    path: {
        type: String,
        require: true
    }
})
const image = mongoose.model("advertisement", imgSchema)

module.exports = image