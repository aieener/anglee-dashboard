const path = require("path");
const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dashboardRoutes = require("./routes/dashboard");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(dashboardRoutes);

mongoose
  .connect(
    "mongodb://yai:admin12345@ds147746.mlab.com:47746/anglee-dashboard",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
