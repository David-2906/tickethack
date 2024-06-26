require("dotenv").config() 
require("./models/connection") 

var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var indexRouter = require("./routes/index")
var tripsRouter = require("./routes/trips")

var app = express()

const cors = require("cors") 

// const corsOptions = {
//   origin: function (origin, callback) {
//     const allowedOrigins = [
//       "http://localhost:3000",
//       "http://localhost:3001",
//       "http://localhost:5500"
//     ];
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };

app.use(cors())

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/trips", tripsRouter)

module.exports = app
