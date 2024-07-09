import React from "react";
import contact from '../../img/contact.png'
import useIntersectionObserver from '../../functions/useInfiniteScroll'

const ContactMe = ()=>{
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return(
        <div ref={sectionRef} className={`section${isVisible?"visible":""} contact-me`} id="contact-me">
            <h2>Contato</h2>
            <div className="box-contact">
                <img src={contact} alt="contact-info"/>
            </div>
        </div>
    )
}

export default ContactMe