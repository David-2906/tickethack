var express = require("express")
var router = express.Router()

const Trip = require("../models/trips")
// const Cart = require("../models/carts") 
// const Bookings = require("../models/bookings")  

// const { checkBody } = require("../modules/checkBody") 

// Rechercher un nouveau trajet dans départ et arrivé 
router.get("/:departure/:arrival", (req, res) => {
    Trip.find({
      departure: { $regex: new RegExp(req.params.departure, "i") },
      arrival: { $regex: new RegExp(req.params.arrival, "i") },
    }).then(data => {
      if (data) {
        res.json({ result: true, Trip: data });
      } else {
        res.json({ result: false, error: "Trip not found" });
      }
    })
  });

  // Afficher la liste des trips
  router.get('/', (req, res) => {
	Trip.find().then(data => {
		res.json({ data });
	});
});

module.exports = router