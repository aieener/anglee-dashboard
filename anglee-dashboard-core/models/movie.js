const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  releaseDate: {
    type: Date,
    require: true
  },
  cast : Map,
  imageUrl: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Movie', movieSchema);
