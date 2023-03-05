const mongoose = require("mongoose")

// creating model

const approvalSchema = new mongoose.Schema({
    name: {
        type : String},
    
    phone: {
        type : Number},
    place: {
            type : String},
        
    email:{
        type : String},
    nameOfOrganization: {
        type : String}
    
})


const approval= mongoose.model("approval",approvalSchema)

module.exports = approval