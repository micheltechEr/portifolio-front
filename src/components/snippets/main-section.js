import React from "react";
import bannerhome from '../../img/banner-home.jpg'
const mainsection= ()=>{
    return(
            <div className="main-section flex">
            <div className="main-info flex">
                <h1>Ângelo Miguel</h1>
                <h2>Desenvolvedor <span>Front-End</span></h2>
                <a href="#" className="button contact">&lt;CONTATO/&gt;</a>
            </div>
            <div className="banner-home flex">
                <img src={bannerhome} alt="banner-home"/>
            </div>
            </div>
    )
}
export default mainsection