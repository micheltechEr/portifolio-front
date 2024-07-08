import React from "react";
import curriculumimage from '../../img/curriculum.png'
import { zoomImage } from "../../functions/main";
import { forwardRef } from 'react';

const CurriculumSection = forwardRef((props,ref)=>{
    return(
        <div className="curriculum-section section" id="curriculum-section" ref={ref}>
            <div className="box-description">
            <h2>Portifólio & Curriculo</h2>
            <h3>Aqui listei minha formação acadêmica e minhas habilidades técnicas.
                A medida que aprimoro, adiciono novos “objetos”
                de habilidades.
            </h3>
            </div>
            <span className="hidden_box">&#123;Clique aqui para ampliar a imagem&#125;</span>
            {zoomImage()}
            <div className="box-image">
                <img src={curriculumimage} className="curriculum-image" alt="Imagem do curriculo" />
            </div>
        </div>
    )
})
export default CurriculumSection