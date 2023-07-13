const fetchPromises = [];

class PortfolioItem extends HTMLElement {
    connectedCallback() {
        const fetchPromise = fetch(this.dataset.src)
            .then((response) => response.json())
            .then((data) => {
                var icon = ''
                if (data["description"]["icon"]) {
                    icon = `<i class="${data["description"]["icon"]["shape"]}" style="${data["description"]["icon"]["color"] ? 'color:' + data["description"]["icon"]["color"] + ';' : ''} font-size: xxx-large;"></i>`
                }
                var content = ''
                var isVideo = data["content"]["video"]["src"] ? true : false;
                if (isVideo) {
                    content = `
                        <video loop playsinline muted class="video-hover lazy hidden-video-phone" poster="${data["content"]["video"]["poster"]}" onmouseover="this.play()" onmouseout="this.pause();">
                            <source data-src="${data["content"]["video"]["src"]}" type="video/mp4">
                        </video>`
                } else {
                    content = `<div class="img-fluid lazy-background" data-src="${data["content"]["image"]}" style="background-size: cover"></div>`
                }
                var items = `<li class="bulletPoint img-caption">${data["content"]["caption"]}</li>`
                data["bulletPoints"].forEach(i => {items += `<li class="bulletPoint">* ${i}</li>`;})
                this.innerHTML = `
                        <a class="portfolio-item" href="${data["url"]}" ${data["newTab"] ? 'target="_blank"' : ''}>
                            <div class="caption${isVideo ? '-video-hover' : ''}">
                                <div class="caption-content">
                                    <div class="h2" style="${data["description"]["black"] ? "color:black;" : ""}">${data["title"]}</div>
                                    <p  class="mb-0" style="${data["description"]["size"] ? "font-size:" + data["description"]["size"] + ";" : ""} ${data["description"]["bold"] ? "font-weight: bold;" : ""} ${data["description"]["black"] ? "color:black;" : ""}">${data["description"]["text"]}</p>
                                    ${icon}
                                    ${data["description"]["hover-text"] ? '<p class="mb-0 hidden-phone">'+ data["description"]["hover-text"] +'</p>' : ""}
                                </div>
                            </div>
                            ${content}
                            <repo-stats data-langs='[${data["repo-stats"]["langs"]}]' data-forks='[${data["repo-stats"]["forks"]}]' data-stars='[${data["repo-stats"]["stars"]}]' data-black=${data["repo-stats"]["black"]}></repo-stats>
                        </a>
                        <ul>${items}</ul>
                    `;
            });
        fetchPromises.push(fetchPromise);
    }
}

customElements.define('portfolio-item', PortfolioItem);




                