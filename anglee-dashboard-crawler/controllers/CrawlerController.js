const IMDbCrawlerService = require("../services/IMDbCrawlerService");

exports.crawlIMDbReviews = (req, res, next) => {
    const service = new IMDbCrawlerService();
    const targetMovie = req.body;
    service
        .crawl(targetMovie)
        .then(reviews => {
            res.send(reviews);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("crawler error!");
        });
};
