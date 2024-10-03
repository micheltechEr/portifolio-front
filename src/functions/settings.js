const zoomImage = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const hiddenBox = document.querySelector('.hidden_box');
        if (hiddenBox.length >= 1) {
            hiddenBox.onclick = function() {
                const img = document.querySelector('.curriculum-section .box-image img');
                if (img) {
                    img.classList.toggle('active-zoom');
                }
            }
        }
    });
}

export {zoomImage};
