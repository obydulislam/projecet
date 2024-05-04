const mongoose = require("mongoose")

let {USER_NAME, PASSWORD, DATABASE_NAME} = process.env

function DBconnet(){
    mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.fzaq3wl.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>{
        console.log("Dbconneted")
    })
} 

module.exports = DBconnet