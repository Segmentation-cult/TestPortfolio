class RepoStats extends HTMLElement {
    connectedCallback() {
        var langs = ''
        JSON.parse(this.dataset.langs).forEach(i => {langs +=  `
            <span>
                <div class="language-circle ${i.length > 1 ? i[1] : i[0]}"></div>
                <p class="text-${this.dataset.black ? 'black' : 'white'} language">${i[0]}</p>
            </span>`;})
        var forks = ''
        if (this.dataset.forks) {
            JSON.parse(this.dataset.forks).forEach(i => {forks +=  
                `<span>
                    <svg aria-hidden="true" class="octicon repo-star-svg" height="20" role="img" viewBox="0 0 10 16" width="12" fill="rgb(106, 115, 125)">
                        <path fill="${this.dataset.black ? '#000000' : '#FFFFFF'}" fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                    </svg>
                    <p class="text-${this.dataset.black ? 'black' : 'white'} language">${i[0]}</p>
                </span>`;})
        }
        var stars = ''
        if (this.dataset.stars) {
            JSON.parse(this.dataset.stars).forEach(i => {stars +=  
                `<span>
                    <svg aria-hidden="true" class="octicon repo-star-svg" height="20" role="img" viewBox="0 0 14 16" width="20" fill="rgb(255, 191, 0)"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                    <p class="text-${this.dataset.black ? 'black' : 'white'} language">${i[0]}</p>
                </span>`;})
        }
        this.innerHTML = `
            <div class="repo-stats">
                <div class="repo-left-stat">
                    ${langs}
                    ${forks}
                    ${stars}
                </div>
                <!-- <div class="repo-right-stat"><p>281560 KB</p></div> -->
            </div>`;             
    }
}

customElements.define('repo-stats', RepoStats);


