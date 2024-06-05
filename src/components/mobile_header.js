import React from 'react'
import ToggleBurguer from './snippets/toggle-burguer'

const header_mobile = ()=>{
    return(    
    <header class="portifolio-header-mobile">
    <ToggleBurguer/>
    
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
    </ul>

</header>)

}

export default header_mobile

