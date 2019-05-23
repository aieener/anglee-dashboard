const path = require("path");
const express = require("express");
const port = process.env.PORT || 5001;
const bodyParser = require("body-parser");
const crawlerRoutes = require("./routes/routes");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(crawlerRoutes);

app.listen(port);
