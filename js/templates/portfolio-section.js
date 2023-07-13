
class PortfolioSection extends HTMLElement {
    connectedCallback() {
        const fetchPromise = fetch(this.dataset.src)
            .then((response) => response.json())
            .then((data) => {
                var items = ``
                data["items"].forEach(i => {items += `<portfolio-item class="col-lg-6" ${i["id"] ? 'id="' + i["id"] + '"' : ''} data-src="${i["src"]}"></portfolio-item>`;})
                this.innerHTML = `
                <section class="content-section ${data["color"]} text-white text-center">
                    <div class="container px-4 px-lg-5">
                        <div class="content-section-heading text-center">
                            <h2>${data["title"]}</h2>
                            <h3 class="text-secondary mb-0">${data["description"]}</h3>
                        </div>
                        <div class="row gx-0">
                            ${items}
                        </div>
                    </div>
                </section>`;
            });
        fetchPromises.push(fetchPromise);
    }
}

customElements.define('portfolio-section', PortfolioSection);




                