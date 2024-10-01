const showMobileMenu = () => {
    window.addEventListener("load",function(){
        const showMenu = () => {
            document.querySelector('.portifolio-header-mobile ul').classList.add('active');
            document.querySelector('.shadowEffect').classList.add('shadowOn');
            document.querySelector('.toggle-burger').style.display = 'none';
        }

        const hideMenu = () => {
            let menu = document.querySelector('.portifolio-header-mobile ul');
            menu.classList.remove('active');
            document.querySelector('.shadowEffect').classList.remove('shadowOn');
            document.querySelector('.toggle-burger').style.display = 'block';
        }

        const burgerIcon = document.querySelector('.toggle-burger svg');
        const shadowEffect = document.querySelector('.shadowEffect');

        if (burgerIcon && shadowEffect) {
            burgerIcon.addEventListener('click', showMenu);
            shadowEffect.addEventListener('click', hideMenu);
            
            burgerIcon.addEventListener('touchstart', showMenu);
            shadowEffect.addEventListener('touchstart', hideMenu);
        }
    })
};

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

export {showMobileMenu, zoomImage};
