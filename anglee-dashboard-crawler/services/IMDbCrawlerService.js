const puppeteer = require("puppeteer");
module.exports = class IMDbCrawlerService {
    constructor() {
        this.REVIEW_INFO_SELECTOR = ".lister-item";
        this.REVIEW_DATE_SELECTOR = ".display-name-date .review-date";
        this.REVIEW_USER_SELECTOR = ".display-name-date .display-name-link";
        this.REVIEW_SCORE_SELECTOR = ".rating-other-user-rating";
        this.REVIEW_BODY_SELECTOR = ".content";
        this.LOAD_MORE_BTN_SELECTOR = "#load-more-trigger";
        this.NUM_REVIEW_SELECTOR = ".lister .header span";
    }

    async _getTimesToClick(page) {
        let numOfPage = await page.evaluate(sNum => {
            return document.querySelector(sNum).innerText;
        }, this.NUM_REVIEW_SELECTOR);
        numOfPage = numOfPage.replace(" Reviews", "").replace(",", "");
        numOfPage = parseInt(numOfPage);
        return Math.floor(numOfPage / 25);
    }

    async _clickAllLoadMore(page, timesToClickLoadMore) {
        for (let i = 0; i < timesToClickLoadMore; i++) {
            await page.click(this.LOAD_MORE_BTN_SELECTOR);
            await page.waitFor(400);
        }
    }

    async _doCrawling(page, movieName) {
        return await page.evaluate(
            (sInfo, sDate, sScore, sBody, name, sUser) => {
                return [...document.querySelectorAll(sInfo)].map($item => {
                    const title = $item.querySelector(".title")
                        ? $item.querySelector(".title").innerText
                        : "N/A";
                    const date = $item.querySelector(sDate).innerText;
                    const user = $item.querySelector(sUser).innerText;
                    const spoiler = $item.querySelector(".spoiler-warning") ? true : false;
                    const score = $item.querySelector(sScore)
                        ? $item.querySelector(sScore).innerText.trim()
                        : "N/A";
                    const body = $item.querySelector(sBody).innerText;
                    return {
                        movieName: name,
                        title: title,
                        date: date,
                        score: score,
                        body: body,
                        user: user,
                        spoiler: spoiler
                    };
                });
            },
            this.REVIEW_INFO_SELECTOR,
            this.REVIEW_DATE_SELECTOR,
            this.REVIEW_SCORE_SELECTOR,
            this.REVIEW_BODY_SELECTOR,
            movieName,
            this.REVIEW_USER_SELECTOR
        );
    }

    async crawl(movie) {
        console.log(`IMDb crawler: starting Crawling for id ${movie.title} ....`);
        const movieUrl =
            "https://www.imdb.com/title/" + movie.reviewIds.iMDbId + "/reviews?ref_=tt_urv";
        const browser = await puppeteer.launch({args: ['--no-sandbox']});
        const page = await browser.newPage();

        await page.goto(movieUrl);
        await this._clickAllLoadMore(page, await this._getTimesToClick(page));
        await page.waitFor(500);
        let result = await this._doCrawling(page, movie.title);
        browser.close();
        console.log(`IMDb crawler: done Crawling task for id ${movie.title}`);
        return result;
    }
};
