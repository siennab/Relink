class UrlInput extends HTMLElement {
    constructor() {
        super();
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Paste your URL here';
        this.innerHTML = '';
        this.appendChild(input);
        input.addEventListener('input', (event) => {
            this.dispatchEvent(new CustomEvent('url-input', {
                detail: { value: event.target.value, isValid: this.checkUrl(event.target.value) }
            }));
        });
    }

    checkUrl(text) {
        const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
        return urlPattern.test(text);   
    }
}

customElements.define('app-url-input', UrlInput);