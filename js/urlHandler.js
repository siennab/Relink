import * as urls from '../urls.json';
class UrlHandler {

    constructor() {

    }

    encode(url) {
        const encodedUrl = btoa(url);
        return encodedUrl;
    }

    decode(url) {
        const decodedUrl = atob(url);
        return decodedUrl;
    }
}