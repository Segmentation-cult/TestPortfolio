class MiniProfile extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="resizable-div on-top hidden-phone" id="miniProfile">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-10 text-center distanceBasedOpacity" style="background-color: #d4e5eb8f; border-radius: 20px;">
                    <img src="${this.dataset.img}" class="profPic-fluid" style="background-size: cover">
                    <h2><strong class="text-white" style="font-family: Cursive; font-weight: bold">${this.dataset.name}</strong></h2>
                    <p class="lead" style="font-weight: 500">
                        <span class="text-white">${this.dataset.title}</span> 
                    </p>
                    <a class="buttonHoverable nav-link text-white" href="${this.dataset.resume}"><span style="text-align: center;">Résumé</span></a>
                    <social-links data-items='${this.dataset.socials}'></social-links>
                </div>
            </div>
        </div>`;             
    }
}

customElements.define('mini-profile', MiniProfile);
