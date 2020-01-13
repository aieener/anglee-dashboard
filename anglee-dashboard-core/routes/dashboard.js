const path = require("path");
const express = require("express");
const router = express.Router();
const movieController = require('../controllers/movieController');
const iMdbReviewController = require('../controllers/reviews/iMDbReviewController');

// test route
router.get("/test", (req, res) => {
    res.send({express: "Express backend is connected to REACT"});
});

router.get('/movies', movieController.getMovies);
router.post('/add-movie', movieController.postAddMovie);
router.post('/delete-movie', movieController.postDeleteMovie);

router.get('/reviews/imdb', iMdbReviewController.getReviews);
router.get('/reviews/imdb/:movieName', iMdbReviewController.getReviewsByMovie);
router.post('/reviews/imdb/add-review', iMdbReviewController.postAddReviews);
router.post('/reviews/imdb/delete-review', iMdbReviewController.postDeleteReviews);


module.exports = router;
