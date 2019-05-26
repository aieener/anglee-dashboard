const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IMDbReview = new Schema({
  movieName: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  score: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('IMDbReview', IMDbReview);