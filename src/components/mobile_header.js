import React from 'react'
import ToggleBurguer from './snippets/toggle-burguer'
import SwitchToggle from './snippets/switchtoggle'
import ChooseLanguage from './translation/translationComponent'
import { useTranslation } from 'react-i18next';

const HeaderMobile = ()=>{
    const { t } = useTranslation();

    return(    
    <header class="portifolio-header-mobile">
    <ToggleBurguer/>
    
    <ul className='flex'>
            <SwitchToggle/>
            <ChooseLanguage/>

            <li>
                <a href='#personal-projects'>{t('menu.personal-projects')}</a>
            </li>
            <li>
                <a href='#curriculum-section'>{t('menu.portifolio')}</a>
            </li>
            <li>
                <a href='#about-me-text'>{t('menu.about')}</a>
            </li>
            <li>
                <a href='#contact-me'>{t('menu.contact')}</a>
            </li>
    </ul>

</header>)

}

export default HeaderMobile


