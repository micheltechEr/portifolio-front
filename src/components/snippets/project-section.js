import React from "react";
import APODImage from '../../img/apod.png'
import NetflixClone from '../../img/netflix-code.png'
import ForBarber from '../../img/forbarber.png'
import useIntersectionObserver from '../../functions/useInfiniteScroll'
import { useTranslation } from 'react-i18next';

const ProjectSection = ()=>{
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });
    const {t} = useTranslation()

    return(
        <div  ref={sectionRef} className={`section${isVisible?" visible":""} personal-projects`} id="personal-projects">
            <h2>
                {t('personalProjects.personalProjectsText')}
                <span className="arrows">&larr;	&rarr;</span>
            </h2>

            <div className="box-section">
                <div className="group-projects">
                    <div className="item">
                        <span>&#123;APOD&#125;</span>
                        <div className="project-image">
                            <a href="https://daily-apod-nasa.vercel.app/" rel="noreferrer" target="_blank">
                            <img src={APODImage} alt="apod-project"/>   
                            </a>
                                      
                        </div>
                    </div>
                    <div className="item">
                        <span>&#123;Clone Home Netflix&#125;</span>
                        <div className="project-image">
                            <a href="https://netflix-clone-dio-sigma.vercel.app/" rel="noreferrer" target="_blank">
                            <img src={NetflixClone} alt="netlix-clone"/> 
                            </a>             
                        </div>
                    </div>
                    <div className="item">
                        <span>&#123;ForBarber&#125;</span>
                        <div className="project-image">
                            <a href="https://github.com/micheltechEr/forbarber" rel="noreferrer" target="_blank">
                            <img src={ForBarber} alt="for-barber"/>             
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection