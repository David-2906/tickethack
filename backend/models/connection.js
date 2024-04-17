const mongoose = require("mongoose")
const connectionString =process.env.DB_CONNECTION_STRING
mongoose.set("strictQuery", true)

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Successfully connected to Tickethack 🥳 !"))
  .catch((errorMessage) => console.error(errorMessage))