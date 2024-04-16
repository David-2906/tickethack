const mongoose = require("mongoose")
const connectionString = "mongodb+srv://leabonnenfant:SRRPssEsZfa813no@cluster0.uj3rgmm.mongodb.net/tickethack"
mongoose.set("strictQuery", true)

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Successfully connected to Tickethack 🥳 !"))
  .catch((errorMessage) => console.error(errorMessage))