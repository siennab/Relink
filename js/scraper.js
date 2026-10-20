export class Scraper {

    constructor() {

    }

    scrape(url) {
        
    }

    async scrapeUrlWithProxy(targetUrl) {
    // Example using a public CORS proxy (Do not use public proxies for sensitive data)
    const browserlessProxyUrl = 'https://chrome.browserless.io/?token=2VTIFuqVX0HKJ0U6e8427969e6223b7793d7efc3785162c51&url=';
    
    try {
        const response = await fetch(browserlessProxyUrl + targetUrl);
        const htmlString = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        
        const pageTitle = doc.querySelector('h1')?.textContent;
        console.log("Scraped Title:", pageTitle);
        
    } catch (error) {
        console.error("Scraping failed:", error);
    }
    }
}