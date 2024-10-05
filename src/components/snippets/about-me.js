import React from "react";
import { useTranslation } from 'react-i18next';
import profilecurriculum from '../../img/profile-curriculum.jpg';
import useIntersectionObserver from '../../functions/useInfiniteScroll';
const AboutMe = () => {
  const { t } = useTranslation();
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div ref={sectionRef} className={`section ${isVisible ? " visible" : ""} about-me`} id="about-me">
      <div className="about-me-text" id="about-me-text">
        <h2>{t('aboutMe.title')}</h2>
        <h3>
          {t('aboutMe.greeting')}
          {t('aboutMe.description')}
        </h3>
      </div>
      <div className="about-me-image">
        <img src={profilecurriculum} alt="profile-curriculum" />
      </div>
    </div>
  )
}

export default AboutMe;
