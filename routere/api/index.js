const express = require("express");
const _ = express()
const auth = require("./auth")


const authrouter = require("./auth")
_.use("/auth",auth)


module.exports = _