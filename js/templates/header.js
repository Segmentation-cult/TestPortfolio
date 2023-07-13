class Header extends HTMLElement {
    connectedCallback() {
        var items = ''
        JSON.parse(this.dataset.items).forEach(i => {items += `<li><a class="nav-link text-white" href="${i[0]}">${i[1]}</a></li>`;})
        this.innerHTML = `
            <div class="header" id="myHeader">
                <div class="menu-brand">
                    <a class="nav-link text-white logo" href="#page-top">${this.dataset.brand}</a>
                </div>
                <div class="menu-bar">
                    <ul class="navbar-horizontal">${items}</ul>
                </div>
            </div>`;                
    }
}

customElements.define('main-header', Header);