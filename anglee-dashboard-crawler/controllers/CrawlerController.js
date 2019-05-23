const IMDbCrawlerService = require("../services/IMDbCrawlerService");

exports.crawlIMDbReviews = (req, res, next) => {
  const service = new IMDbCrawlerService();
  const targetMovie = req.body;
  console.log(targetMovie);
  service
    .crawl(targetMovie)
    .then(reviews => {
      res.send(reviews);
    })
    .catch(err => {
      console.log(err);
    });
};
