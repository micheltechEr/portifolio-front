import React from "react";
import { forwardRef } from 'react';

import bannerhome from '../../img/banner-home.jpg'
const mainsection= forwardRef((props, ref) =>{
    return(
            <div className="main-section flex" ref={ref}>
            <div className="main-info flex">
                <h1 className="title">Ângelo Miguel</h1>
                <h2>Desenvolvedor <span>&#123;Front-End&#125;</span></h2>
                <a href="https://www.linkedin.com/in/angelo-miguel-rib-cerq/" target="_blank" className="button contact">&lt;CONTATO/&gt;</a>
            </div>
            <div className="banner-home flex">
                <img src={bannerhome} alt="banner-home"/>
            </div>
            </div>
    )
})
export default mainsection