const express = require('express');
const app = express()

app.use(express.json())

app.use('/api/auth', require("./routes"))

const port  = 3000;


const connectDB = require("./db");

connectDB()


const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


process.on("unhandledRejection", err => {
        console.log(`An error occured: ${err.message}`)
        server.close(() => process.exit(1))
})




module.exports = {app};