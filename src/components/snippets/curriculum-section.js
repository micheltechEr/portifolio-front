import React from "react";
import curriculumimage from '../../img/curriculum.png'
import { zoomImage } from "../../functions/settings";
import useIntersectionObserver from '../../functions/useInfiniteScroll'

const CurriculumSection = ()=>{
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });

    return(
        <div ref={sectionRef} className={`section${isVisible?"visible":""} curriculum-section`} id="curriculum-section">
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
}
export default CurriculumSection