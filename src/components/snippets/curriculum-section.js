import React from "react";
import curriculumimage from '../../img/curriculum.png'
const CurriculumSection = ()=>{
    return(
        <div className="curriculum-section" id="curriculum-section">
            <div className="box-description">
            <h2>Portifólio & Curriculo</h2>
            <h3>Aqui listei minha formação acadêmica e minhas habilidades técnicas.
                A medida que aprimoro, adiciono novos “objetos”
                de habilidades.
            </h3>
            </div>
            <div className="box-image">
                <img src={curriculumimage} alt="curriculum-image" />
            </div>
        </div>
    )
}
export default CurriculumSection