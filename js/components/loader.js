class Loader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const loader = document.createElement('section');
        loader.classList.add('loader', 'hidden');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = 'assets/loader.gif';
        img.alt = 'Loading';
        figure.appendChild(img);
        loader.appendChild(figure);
        shadow.appendChild(loader);
        loader.style.display = 'none';
    }

    hide() { 
        const loader = this.shadowRoot.querySelector('section');
        if (loader) {
            loader.classList.add('hidden');
            loader.style.display = 'none';
        }
    }
    show() {
        const loader = this.shadowRoot.querySelector('section');
        if (loader) {
            loader.classList.remove('hidden');
            loader.style.display = 'block';
        }
    }
}

customElements.define('app-loader', Loader);