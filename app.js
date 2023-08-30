const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("./config/db");

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//APIs

app.use("/api/users", require("./routes/users.route"));

//index
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//404 not found
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not  found." });
});

//handle server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong." });
});

module.exports = { app };
