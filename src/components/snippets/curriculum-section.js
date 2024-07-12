import React from "react";
import curriculumimage from '../../img/curriculum.png'
import { zoomImage } from "../../functions/settings";
import useIntersectionObserver from '../../functions/useInfiniteScroll'
import { useTranslation } from 'react-i18next';

const CurriculumSection = ()=>{
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });
    const {t} = useTranslation()
    return(
        <div ref={sectionRef} className={`section${isVisible?"visible":""} curriculum-section`} id="curriculum-section">
            <div className="box-description">
            <h2>{t('portifolioL.portifolio')} & {t('portifolioL.curriculum')}</h2>
            <h3>{t('portifolioL.description')}</h3>
            </div>
            <span className="hidden_box">&#123;{t('portifolioL.changeImageText')}&#125;</span>
            {zoomImage()}
            <div className="box-image">
                <img src={curriculumimage} className="curriculum-image" alt="Imagem do curriculo" />
            </div>
        </div>
    )
}
export default CurriculumSection