const IMDbCrawlerService = require("./IMDbCrawlerService");
iMDbCrawlerService = new IMDbCrawlerService();
const lifeOfPi = {
  title : 'lifeOfPi',
  reviewIds: {
    iMDbId: 'tt0454876'
  }
}
iMDbCrawlerService.crawl(lifeOfPi);
