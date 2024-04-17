var express = require("express")
var router = express.Router()

const Trip = require("../models/trips")
const Cart = require("../models/cart")
const Booking = require("../models/bookings")
// const Bookings = require("../models/bookings")  

// const { checkBody } = require("../modules/checkBody") 

// Rechercher un nouveau trajet dans départ et arrivé 
router.get("/:departure/:arrival/:date", (req, res) => {
const moment = require('moment');
const formattedDate = moment(req.params.date).format('YYYY-MM-DD');
const startdate = `${formattedDate}T00:00:00.000`;
const endDate = `${formattedDate}T23:59:59.999`;


    Trip.find({
      departure: { $regex: new RegExp(req.params.departure, "i") },
      arrival: { $regex: new RegExp(req.params.arrival, "i") },
      date: { $gte: startdate, $lte: endDate } 
    }).then(data => {
      if (data) {
        res.json({ result: true, Trip: data });
      } else {
        res.json({ result: false, error: "Trip not found" });
      }
    })
  });

  // Afficher la liste des trips
  router.get('/carts', (req, res) => {
	Cart.find().then(data => {
		res.json({ data });
	});
});


  router.post('/cart', (req,res)=> {
  
    const newCart = new Cart({
      departure: req.body.departure,
      arrival: req.body.arrival,
      date: req.body.date,
      price: req.body.price,
    });

    newCart.save().then(newDoc => {
      res.json({reuslt: true, Cart : newDoc});
    })


  })
module.exports = router