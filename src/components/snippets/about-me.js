import React from "react";
import profilecurriculum from '../../img/profile-curriculum.jpg'
import { forwardRef } from 'react';

const AboutMe = forwardRef((props,ref)=>{
    return(
        <div className="section about-me" ref={ref}>
            <div className="about-me-text" id="about-me-text">
                <h2>Sobre mim</h2>
                <h3>
                E aí, galera!
                Sou Ângelo Miguel, de Amélia Rodrigues, Bahia, com 24 anos de pura paixão pela tecnologia. Formado em Sistemas de Informação e trabalhando como desenvolvedor front-end, estou sempre pronto para mergulhar de cabeça em novos desafios.
                </h3>
            </div>
            <div className="about-me-image">
                <img src={profilecurriculum} alt="profile-picture-curriculum"/>
            </div>
        </div>
    )
})

export default AboutMe