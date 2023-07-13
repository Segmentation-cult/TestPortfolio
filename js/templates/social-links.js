class SocialLinks extends HTMLElement {
    connectedCallback() {
        var items = ''
        JSON.parse(this.dataset.items).forEach(i => {items += `<a class="social-link rounded-circle text-white mr-3" href="${i[0]}" target="_blank"><i class="${i[1]}"></i></a>`;})
        this.innerHTML = `
        <div class="social-wrapper-horizontal">
            ${items}
            <a class="social-link rounded-circle text-white mr-3" href="https://discord.com/users/RunTime_Terror#3482" target="_blank">
                <img src="https://uploads-ssl.webflow.com/61fdeb0eedb04a2e309af15f/61feea8ce9f6252e3319a642_Discord-Logo-White.svg" width="24" alt="" style="vertical-align: baseline;">
            </a>
        </div>`;                
    }
}

customElements.define('social-links', SocialLinks);
