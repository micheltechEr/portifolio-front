import React from "react";
import useIntersectionObserver from '../../functions/useInfiniteScroll'
import {useTranslation} from 'react-i18next'
import { ImageContact } from "../../functions/image_render";
const ContactMe = ()=>{
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.5 });
    const {t} = useTranslation()
    let languageAtr = document.querySelector('html').getAttribute('lang')
    return(
        <div ref={sectionRef} className={`section${isVisible?"visible":""} contact-me`} id="contact-me">
            <h2>{t('contact.title-section')}</h2>
            <div className="box-contact">
                <ImageContact isEnglish={languageAtr} />
            </div>
        </div>
    )
}

export default ContactMe