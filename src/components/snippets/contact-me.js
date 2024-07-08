import React from "react";
import contact from '../../img/contact.png'
import { forwardRef } from 'react';

const ContactMe = forwardRef((props,ref)=>{
    return(
        <div className="section contact-me" id="contact-me" ref={ref}>
            <h2>Contato</h2>
            <div className="box-contact">
                <img src={contact} alt="contact-info"/>
            </div>
        </div>
    )
})

export default ContactMe