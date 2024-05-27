import React from "react";
import SocialMedia from "./snippets/social-media";
import showMobileMenu from "../functions/main";
const Footer = ()=>{
    return(
        <div className="footer">
        <SocialMedia/>
        {showMobileMenu()}
        </div>
    )
}

export default Footer