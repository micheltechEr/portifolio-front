import React from "react";
import { useTranslation } from 'react-i18next';
import bannerhome from '../../img/banner-home.jpg'
import { MainSubTitle } from "../../functions/image_render";
import i18next from "i18next";

const Mainsection= () =>{
    const { t } = useTranslation();
    const isEnglish = i18next.language ==='en'
    return(
            <div className="main-section flex">
            <div className="main-info flex">
                <h1 className="title">Ângelo Miguel</h1>
                <MainSubTitle isEnglish={isEnglish ? 'en' : 'pt'} />
                <a href="https://www.linkedin.com/in/angelo-miguel-rib-cerq/"  rel="noreferrer" target="_blank" className="button contact">&lt;{t('buttonText.text')}/&gt;</a>
            </div>
            <div className="banner-home flex">
                <img src={bannerhome} alt="banner-home"/>
            </div>
            </div>
    )
}
export default Mainsection