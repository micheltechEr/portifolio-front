import React from "react";
import MainSection from '../components/snippets/main-section'
import PersonalProjects from '../components/snippets/project-section'
import CurriculumSection from '../components/snippets/curriculum-section';
import AboutMe from "../components/snippets/about-me";
import ContactMe from "./snippets/contact-me";

const BodyProject = ()=>{
    return(
        <div className="body-project">
            <MainSection />
            <PersonalProjects/>
            <CurriculumSection />
            <AboutMe/>
            <ContactMe />
        </div>
    )
}

export default BodyProject