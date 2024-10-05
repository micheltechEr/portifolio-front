import React from "react";
import useIntersectionObserver from '../../functions/useInfiniteScroll'
import {useTranslation} from 'react-i18next'
import { ImageContact } from "../../functions/image_render";
import i18next from "i18next";

const ContactMe = ()=>{
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.5 });
    const {t} = useTranslation();
    const isEnglish = i18next.language ==='en'
    return(
        <div ref={sectionRef} className={`section${isVisible?" visible":""} contact-me`} id="contact-me">
            <h2>{t('contact.title-section')}</h2>
            <div className="box-contact">
                <ImageContact isEnglish={isEnglish ? 'en':'pt'} />
            </div>
        </div>
    )
}

export default ContactMe