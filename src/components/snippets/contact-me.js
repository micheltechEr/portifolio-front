import React from "react";
import contact from '../../img/contact.png'
const ContactMe = ()=>{
    return(
        <div className="contact-me">
            <h2>Contato</h2>
            <div className="box-contact">
                <img src={contact} alt="contact-info"/>
            </div>
        </div>
    )
}

export default ContactMe