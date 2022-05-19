const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

const MONGODB_URI =
  "mongodb+srv://Khushi:QrisRDvwZoVA3xlL@cluster0.nodqw.mongodb.net/Blog?w=majority";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/client/dist/")));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
