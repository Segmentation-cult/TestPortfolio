function lazyLoad(lazyVideos, lazyImages, lazyBackgrounds) {
    if ("IntersectionObserver" in window) {
        var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(image) {
                if (image.isIntersecting) {
                    const img = image.target;
                    const src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    img.classList.remove("lazy");
                    lazyImageObserver.disconnect();
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });

        var lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const classToAdd = entry.target.getAttribute('data-src');
                    entry.target.classList.remove("lazy-background");
                    entry.target.classList.add(classToAdd);
                    lazyBackgroundObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });


        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            if (video.target.classList.contains("hidden-video-phone") && window.innerWidth > 768) {
                                videoSource.src = videoSource.dataset.src;
                            }
                            
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
}


function mutationCallback(mutationsList, observer) {
    console.log("mutationCallback")
    for (var mutation of mutationsList) {
        if (mutation.type === 'childList') {
          if (mutation.addedNodes.length > 0) {
            lazyLoad();
          }
        }
    }
    
}

let count = 0;
let maxCount = 22;
function checkCustomTags() {
    console.log("checking")
    var videos = [].slice.call(document.querySelectorAll("video.lazy"));
    var images = [].slice.call(document.querySelectorAll("img.lazy"));
    var backgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
    count = videos.length + images.length + backgrounds.length;
    maxCount = Math.max(count, maxCount)
    if (count == maxCount) {
        lazyLoad(videos, images, backgrounds);
        console.log("lazy loading", count)
    } else {
        setTimeout(checkCustomTags, 100); // Check again after 100ms
    }
}

// Call the function to check if custom tags are added
checkCustomTags();
