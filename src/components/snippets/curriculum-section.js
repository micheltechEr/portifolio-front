import React from "react";
import { zoomImage } from "../../functions/settings";
import useIntersectionObserver from '../../functions/useInfiniteScroll'
import { useTranslation } from 'react-i18next';
import { ImageRenderCurriculum } from "../../functions/image_render";

const CurriculumSection = ()=>{
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });
    let langAtr = document.querySelector('html').getAttribute('lang')
    zoomImage()
    
    const {t} = useTranslation()
    return(
        <div ref={sectionRef} className={`section${isVisible?"visible":""} curriculum-section`} id="curriculum-section">
            <div className="box-description">
            <h2>{t('portifolioL.portifolio')} & {t('portifolioL.curriculum')}</h2>
            <h3>{t('portifolioL.description')}</h3>
            </div>
            <span className="hidden_box">&#123;{t('portifolioL.changeImageText')}&#125;</span>
            <div className="box-image">
                <ImageRenderCurriculum isEnglish={langAtr} />
            </div>
        </div>
    )
}
export default CurriculumSection