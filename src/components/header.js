    import React from 'react'
    import SwitchToggle from './snippets/switchtoggle'
    import ChooseLanguage from './translation/translationComponent'
    import { useTranslation } from 'react-i18next';

    const Header = ()=>{
        const { t } = useTranslation();
        return(    
        <header className="portifolio-header">
        <ul className='flex'>
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
            <li className='toggle-dark-mode'>
            <SwitchToggle/>
            </li>
            <li>
                <ChooseLanguage/>
            </li>
        </ul>
    </header>)

    }

    export default Header

