const mongoose = require("mongoose");
const config = require("./config");
const DBUrl = config.db.url;

mongoose
  .connect(DBUrl)
  .then(() => {
    console.log(`Database is connected successfully.`);
  })
  .catch(err => {
    console.log(err);
  });
