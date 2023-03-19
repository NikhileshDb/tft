const Mongoose = require("mongoose")
const dev_db_url = `mongodb+srv://nikhilesh:a6xzs7H0INAXFny8@cluster0.a5brsvj.mongodb.net/?retryWrites=true&w=majority`
const localDB = process.env.MONGODB_URI || dev_db_url;
const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB



