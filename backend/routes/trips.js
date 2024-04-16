var express = require("express")
var router = express.Router()

const Trip = require("../models/trips")
const Cart = require("../models/carts") 
const Bookings = require("../models/bookings")  

// const { checkBody } = require("../modules/checkBody") 


module.exports = router