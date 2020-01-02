const IMDbReview = require("../../models/reviews/imdbReviews");

exports.getReviews = (req, res, next) => {
    IMDbReview.find()
        .then(reviews => {
            res.send({reviews: reviews});
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getReviewsByMovie = (req, res, next) => {
    const name = req.params.movieName;
    IMDbReview.find({movieName: name})
        .then(reviews => {
            res.send({reviews: reviews});
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postAddReviews = (req, res, next) => {
    IMDbReview.insertMany(req.body)
        .then(result => {
            console.log("added IMDbReviews");
            res.send("successfully saved IMDbReviews to database");
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postDeleteReviews = (req, res, next) => {
    const name = req.body.movieName;
    IMDbReview.deleteMany({movieName: name})
        .then(() => {
            const message = `delete all reviews about ${name}`;
            console.log(message);
            res.send(message);
        })
        .catch(err => console.log(err));
};
