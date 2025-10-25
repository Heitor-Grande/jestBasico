const { sumHttp } = require("../controllers/sum/sum.controller")

const routerSum = require("express").Router()

routerSum.post("/somar", sumHttp)

module.exports = routerSum