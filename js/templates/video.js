class MainVideo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <video loop autoplay muted class="video" id="portfolio-video" poster="${this.dataset.poster}">
                <source type="video/mp4">
            </video>
            <div class="loader" id="videoLoader"></div>`;             
    }
}

customElements.define('main-video', MainVideo);


