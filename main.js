import { Scraper } from './js/scraper.js';
import './js/components/loader.js';
import './js/components/urlInput.js';

class ReLink {
    constructor() {
        const scraper = new Scraper();
        scraper.scrapeUrlWithProxy('https://zillow.com');
    }
}

new ReLink();