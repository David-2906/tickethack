var express = require("express")
var router = express.Router()

const Trip = require("../models/trips") 

const { checkBody } = require("../modules/checkBody") 


module.exports = router