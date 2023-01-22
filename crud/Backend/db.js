const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

// main().catch(err => console.log(err));

const conn = async () => {
  const con = await mongoose.connect('mongodb://localhost:27017/Crud');
  console.log("db connected...");

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
module.exports = conn;