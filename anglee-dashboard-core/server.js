const path = require("path");
const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dashboardRoutes = require("./routes/dashboard");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(dashboardRoutes);

mongoose
  .connect(
    "mongodb://yai:admin12345@ds147746.mlab.com:47746/anglee-dashboard"
  )
  .then(() => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
