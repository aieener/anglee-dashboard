const path = require("path");
const express = require("express");
const router = express.Router();
const CrawlerController = require('../controllers/CrawlerController');

router.get("/test", (req, res) => {
    res.send({express: "Express backend is connected"});
});

router.post("/crawlIMDb", CrawlerController.crawlIMDbReviews);
module.exports = router;