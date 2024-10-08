import React, { useEffect, useState } from "react";

const useMobileZoom = () => {
    const [isZoom, setIsZoom] = useState(false);

    useEffect(() => {
        const img = document.querySelector('.curriculum-section .box-image img');
        const hiddenBox = document.querySelector('.hidden_box');

        const handleClickOutside = (event) => {
            if (img && !img.contains(event.target) && event.target !== hiddenBox) {
                img.classList.remove('active-zoom');
                setIsZoom(false);
            }
        };

        const handleImageClick = (event) => {
            event.stopPropagation();  
            if (img) {
                img.classList.add('active-zoom');
                setIsZoom(true);
            }
        };

        if (hiddenBox) {
            hiddenBox.addEventListener('click', handleImageClick);
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            if (hiddenBox) {
                hiddenBox.removeEventListener('click', handleImageClick);
            }
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setIsZoom(prevState => !prevState);
    };

    return [isZoom, handleToggle];
};

export { useMobileZoom };
