const express = require('express');
const cors = require("cors");

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/transactions", require("./routes/transactionRouter"))
module.exports = app
