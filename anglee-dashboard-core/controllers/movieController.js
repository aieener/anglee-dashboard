const Movie = require("../models/movie");

exports.getMovies = (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.send({ movies: movies });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postAddMovie = (req, res, next) => {
  console.log(req.body);
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const releaseDate = req.body.releaseDate;
  const description = req.body.description;

  const movie = new Movie({
    title: title,
    imageUrl: imageUrl,
    releaseDate: releaseDate,
    description: description
  });

  movie
    .save()
    .then(result => {
      console.log("added Movie");
      res.send("successfully added Movie");
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postDeleteMovie = (req, res, next) => {
  const movieId = req.body.movieId;
  Movie.deleteOne({_id : movieId})
    .then(() => {
      console.log("delete Movie");
      res.send("deleted Movie");
    })
    .catch(err => console.log(err));
};
