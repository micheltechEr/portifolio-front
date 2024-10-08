import React from "react";
import { useMobileZoom } from "../../functions/settings";
import useIntersectionObserver from '../../functions/useInfiniteScroll';
import { useTranslation } from 'react-i18next';
import { ImageRenderCurriculum } from "../../functions/image_render";
import i18next from "i18next";

const CurriculumSection = () => {
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });
    const isEnglish = i18next.language === 'en';
    const { t } = useTranslation();
    const [isZoom, handleToggle] = useMobileZoom();

    const handleClickOutside = (e) => {
        if (!e.target.closest('.hidden_box') && isZoom) {
            handleToggle();
        }
    };

    return (
        <div ref={sectionRef} onClick={handleClickOutside} className={`section${isVisible ? " visible" : ""} curriculum-section`} id="curriculum-section">
            <div className="box-description">
                <h2>{t('portifolioL.portifolio')} & {t('portifolioL.curriculum')}</h2>
                <h3>{t('portifolioL.description')}</h3>
            </div>
            <span className="hidden_box" onClick={handleToggle}>
                {t('portifolioL.changeImageText')}
            </span>
            <div className={`box-image ${isZoom ? 'active-zoom' : ''}`}>
                <ImageRenderCurriculum isEnglish={isEnglish ? 'en' : 'pt'} />
            </div>
        </div>
    );
};

export default CurriculumSection;
