const path = require("path");
const express = require("express");
const router = express.Router();
const movieController = require('../controllers/movieController');

// test route
router.get("/test", (req, res) => {
  res.send({ express: "Express backend is connected to REACT" });
});

router.get('/movies', movieController.getMovies);
router.post('/add-movie', movieController.postAddMovie);
router.post('/delete-movie', movieController.postDeleteMovie);

module.exports = router;
