require('dotenv').config()
const express = require("express");
const app = express()
const DBconnet = require("./DBconnet/Dbconneted")
const Router = require("./routere")

DBconnet()
app.use(express.json())
app.use(Router)

app.post("/",function(req,res){

})


app.listen(8000,function(){
    console.log("nodemon is runnig")
})
