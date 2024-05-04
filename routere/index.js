const express = require("express");
const _ = express()
const apiRouter = require("../routere/api")

const api = process.env.BASE_URL
_.use(api,apiRouter)


module.exports = _