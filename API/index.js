const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config();

app.use(express.json())
app.use(cors())

app.use("/abonne", require("./routes/abonneRoute"))
console.log(process.env.DB_HOST)

app.listen(5000, () => {
  console.log("Server listening on port 5000")
})