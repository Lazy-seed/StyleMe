const mongoose = require("mongoose");

const connectDb = () => {
  // console.log("db ....rs");
  mongoose.connect("mongodb://localhost:27017/styleMe", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongo db is connected ${"mongodb://localhost:27017/styleMe"} `);
    });
};

module.exports = connectDb;
