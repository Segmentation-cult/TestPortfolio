var elements = [].slice.call(document.querySelectorAll(".distanceBasedOpacity"));

        
// Add event listener for the mousemove event
document.addEventListener('mousemove', (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    elements.forEach(function(element) {
        const { left, top, width, height } = element.getBoundingClientRect();

        const distanceX = Math.abs(mouseX - (left + width / 2));
        const distanceY = Math.abs(mouseY - (top + height / 2));
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = Math.sqrt((screen.width / 2) ** 2 + (screen.height / 2) ** 2);
        const opacity = 1 - distance / maxDistance;

        // Set the opacity of the element
        element.style.opacity = Math.max(opacity, 0.2);
    });
});