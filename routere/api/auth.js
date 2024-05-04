const express = require("express");
const _ = express()
const controlar = require("../../controlar/registreison")
const LogIn = require("../../controlar/login")
const otpverify = require("../../controlar/otpverify")


_.post("/reqistreison",controlar )
_.post("/login",LogIn)
_.post("/otpverify",otpverify)
   



module.exports = _