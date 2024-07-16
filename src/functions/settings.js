import { useEffect } from "react";

const showMobileMenu = () => {
    useEffect(() => {
        const showMenu = () => {
            document.querySelector('.portifolio-header-mobile ul').classList.add('active');
            document.querySelector('.shadowEffect').classList.add('shadowOn');
            document.querySelector('.toggle-burger').style.display = 'none';
        };

        const hideMenu = () => {
            let menu = document.querySelector('.portifolio-header-mobile ul');
            menu.classList.remove('active');
            document.querySelector('.shadowEffect').classList.remove('shadowOn');
            document.querySelector('.toggle-burger').style.display = 'block';
        };

        const burger = document.querySelector('.toggle-burger svg');
        const shadow = document.querySelector('.shadowEffect');

        if (burger) {
            burger.addEventListener('click', showMenu);
        }

        if (shadow) {
            shadow.addEventListener('click', hideMenu);
        }

        return () => {
            if (burger) {
                burger.removeEventListener('click', showMenu);
            }
            if (shadow) {
                shadow.removeEventListener('click', hideMenu);
            }
        };
    }, []);
};

const zoomImage = () => {
    useEffect(() => {
        const hiddenBox = document.querySelector('.hidden_box');
        const image = document.querySelector('.curriculum-section .box-image img');

        if (hiddenBox && image) {
            const toggleZoom = () => {
                image.classList.toggle('active-zoom');
            };

            hiddenBox.addEventListener('click', toggleZoom);

            return () => {
                hiddenBox.removeEventListener('click', toggleZoom);
            };
        }
    }, []);
};

export { showMobileMenu, zoomImage };
