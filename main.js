import { Scraper } from './js/scraper.js';

class ReLink {
    constructor() {
        const scraper = new Scraper();
        scraper.scrapeUrlWithProxy('https://zillow.com');
    }
}

new ReLink();