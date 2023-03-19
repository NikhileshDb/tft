const express = require('express');
const dotenv = require("dotenv")
const connectDB = require("./src/db")
dotenv.config()

connectDB()

const app = express()
const port  = process.env.PORT || 3000;


app.use(express.json())
app.use('/api/auth', require("./src/routes"))




const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


process.on("unhandledRejection", err => {
        console.log(`An error occured: ${err.message}`)
        server.close(() => process.exit(1))
})




module.exports = {server};