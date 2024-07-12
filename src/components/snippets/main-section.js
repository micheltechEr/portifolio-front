import React from "react";
import { useTranslation } from 'react-i18next';
import bannerhome from '../../img/banner-home.jpg'

const Mainsection= () =>{
    const { t } = useTranslation();
    return(
            <div className="main-section flex">
            <div className="main-info flex">
                <h1 className="title">Ângelo Miguel</h1>
                <h2>{t('subtitle.developer')} <span>&#123;Front-End&#125;</span></h2>
                <a href="https://www.linkedin.com/in/angelo-miguel-rib-cerq/" target="_blank" className="button contact">&lt;{t('buttonText.text')}/&gt;</a>
            </div>
            <div className="banner-home flex">
                <img src={bannerhome} alt="banner-home"/>
            </div>
            </div>
    )
}
export default Mainsection