import React from "react";
import bannerhome from '../../img/banner-home.jpg'
const mainsection= ()=>{
    return(
            <div className="main-section flex">
            <div className="main-info flex">
                <h1>Ângelo Miguel</h1>
                <h2>Desenvolvedor <span>&#123;Front-End&#125;</span></h2>
                <a href="#" className="button contact">&lt;CONTATO/&gt;</a>
            </div>
            <div className="banner-home flex">
                <img src={bannerhome} alt="banner-home"/>
            </div>
            </div>
    )
}
export default mainsection