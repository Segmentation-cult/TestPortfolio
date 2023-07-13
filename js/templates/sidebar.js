class Sidebar extends HTMLElement {
    connectedCallback() {
        var items = ''
        JSON.parse(this.dataset.items).forEach(i => {items += `<li class="sidebar-brand"><a href="${i[0]}">${i[1]}</a></li>`;})
        this.innerHTML = `
            <a class="menu-toggle rounded" href="#"><i class="fas fa-bars"></i></a>
            <nav id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand"><a href="assets/Sepehr_Razmyar___Resume.pdf" download>Résumé</a></li>
                    ${items}
                </ul>
            </nav>`;     
    }
}

customElements.define('main-sidebar', Sidebar);