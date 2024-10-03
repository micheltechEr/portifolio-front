import { useState, useEffect } from "react";

export const useMobileMenu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const showMenu = () => {
        setIsMenuVisible(true);
    };

    const hideMenu = () => {
        setIsMenuVisible(false);
    };

    useEffect(() => {
        const shadowEffect = document.querySelector('.shadowEffect');
        const burgerIcon = document.querySelector('.toggle-burger svg');

        if (shadowEffect && burgerIcon) {
            shadowEffect.addEventListener('click', hideMenu);
            burgerIcon.addEventListener('click', showMenu);
            burgerIcon.addEventListener('touchstart', showMenu);
            shadowEffect.addEventListener('touchstart', hideMenu);
        }

        return () => {
            if (shadowEffect && burgerIcon) {
                shadowEffect.removeEventListener('click', hideMenu);
                burgerIcon.removeEventListener('click', showMenu);
                burgerIcon.removeEventListener('touchstart', showMenu);
                shadowEffect.removeEventListener('touchstart', hideMenu);
            }
        };
    }, []);

    return { isMenuVisible, showMenu, hideMenu };
};
