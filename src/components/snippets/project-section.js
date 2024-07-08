import React from "react";
import APODImage from '../../img/apod.png'
import NetflixClone from '../../img/netflix-code.png'
import ForBarber from '../../img/forbarber.png'
import { forwardRef } from 'react';

const ProjectSection = forwardRef((props,ref)=>{
    return(
        <div className="section personal-projects" id="personal-projects" ref={ref}>
            <h2>
                Projetos Pessoais
                <span className="arrows">&larr;	&rarr;</span>
            </h2>

            <div className="box-section">
                <div className="group-projects">
                    <div className="item">
                        <span>&#123;APOD&#125;</span>
                        <div className="project-image">
                            <a href="https://daily-apod-nasa.vercel.app/" target="_blank">
                            <img src={APODImage}/>   
                            </a>
                                      
                        </div>
                    </div>
                    <div className="item">
                        <span>&#123;Clone Home Netflix&#125;</span>
                        <div className="project-image">
                            <a href="https://netflix-clone-dio-sigma.vercel.app/">
                            <img src={NetflixClone}/> 
                            </a>             
                        </div>
                    </div>
                    <div className="item">
                        <span>&#123;ForBarber&#125;</span>
                        <div className="project-image">
                            <a href="https://github.com/micheltechEr/forbarber">
                            <img src={ForBarber}/>             
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ProjectSection