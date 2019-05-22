const puppeteer = require("puppeteer");
module.exports = class IMDbCrawlerService {
  constructor() {
    this.REVIEW_INFO_SELECTOR = ".lister-item";
    this.REVIEW_DATE_SELECTOR = ".display-name-date .review-date";
    this.REVIEW_SCORE_SELECTOR = ".rating-other-user-rating";
    this.REVIEW_BODY_SELECTOR = ".content";
    this.LOAD_MORE_BTN_SELECTOR = "#load-more-trigger";
    this.NUM_REVIEW_SELECTOR = ".lister .header span";
  }

  async _getTimesToClick(page) {
    let numOfPage = await page.evaluate(sNum => {
      return document.querySelector(sNum).innerText;
    }, this.NUM_REVIEW_SELECTOR);
    numOfPage = parseInt(numOfPage.replace(" Reviews", ""));
    return Math.floor(numOfPage / 25);
  }

  async _clickAllLoadMore(page, timesToClickLoadMore) {
    while (timesToClickLoadMore > 0) {
      await page.click(this.LOAD_MORE_BTN_SELECTOR);
      await page.waitFor(500);
      timesToClickLoadMore--;
    }
  }

  async _doCrawling(page) {
    return await page.evaluate(
      (sInfo, sDate, sScore, sBody) => {
        return [...document.querySelectorAll(sInfo)].map($item => {
          const title = $item.querySelector(".title")
            ? $item.querySelector(".title").innerText
            : "N/A";
          const date = $item.querySelector(sDate).innerText;
          const score = $item.querySelector(sScore)
            ? $item.querySelector(sScore).innerText
            : "N/A";
          const body = $item.querySelector(sBody).innerText;
          return { title: title, date: date, score: score , body: body};
        });
      },
      this.REVIEW_INFO_SELECTOR,
      this.REVIEW_DATE_SELECTOR,
      this.REVIEW_SCORE_SELECTOR,
      this.REVIEW_BODY_SELECTOR
    ); 
  }

  async crawl(movieId) {
    const movieUrl =
      "https://www.imdb.com/title/" + movieId + "/reviews?ref_=tt_urv";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(movieUrl);
    await this._clickAllLoadMore(page, await this._getTimesToClick(page));
    await page.waitFor(1000);
    let result = await this._doCrawling(page);
    browser.close()
    console.log(`done Crawling task for id ${movieId}`);
    return result;
  }
};
