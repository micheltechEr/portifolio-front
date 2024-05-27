import React from 'react'
import ToggleBurguer from './snippets/toggle-burguer'

const header_mobile = ()=>{
    return(    
    <header class="portifolio-header-mobile">
    <ToggleBurguer/>
    <ul className='flex'>
        <li>
            <a>PROJETOS PESSOAIS</a>
        </li>
        <li>
            <a>PORTIFÓLIO</a>
        </li>
        <li>
            <a>SOBRE</a>
        </li>
        <li>
            <a>CONTATO</a>
        </li>
    </ul>

</header>)

}

export default header_mobile

