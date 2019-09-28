const IMDbCrawlerService = require("./services/IMDbCrawlerService");
iMDbCrawlerService = new IMDbCrawlerService();
const target =   {
  "title": "Brokeback Mountain",
  "reviewIds": {
    "iMDbId": "tt0388795"
  }
}
iMDbCrawlerService.crawl(target);
