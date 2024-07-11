    import React from 'react'
    import SwitchToggle from './snippets/switchtoggle'
    import ChooseLanguage from './translation/translationComponent'
    const header = ()=>{
        return(    
        <header class="portifolio-header">
        <ul className='flex'>
            <li>
                <a href='#personal-projects'>PROJETOS PESSOAIS</a>
            </li>
            <li>
                <a href='#curriculum-section'>PORTIFÓLIO</a>
            </li>
            <li>
                <a href='#about-me-text'>SOBRE</a>
            </li>
            <li>
                <a href='#contact-me'>CONTATO</a>
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

    export default header

