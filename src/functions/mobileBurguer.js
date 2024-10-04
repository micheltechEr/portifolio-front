import { useState } from "react";

export const useMobileMenu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const showMenu = () => {
        setIsMenuVisible(true);
    };

    const hideMenu = () => {
        setIsMenuVisible(false);        
    };

    return { isMenuVisible, showMenu, hideMenu };
};
 