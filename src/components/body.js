import React from "react";
import MainSection from '../components/snippets/main-section'
import PersonalProjects from '../components/snippets/project-section'
import CurriculumSection from '../components/snippets/curriculum-section';
import AboutMe from "../components/snippets/about-me";
import ContactMe from "./snippets/contact-me";

import withIntersectionObserver from '../functions/infinity-effect';

const ObservedMainSection = withIntersectionObserver(MainSection);
const ObservedPersonalProjects = withIntersectionObserver(PersonalProjects);
const ObservedCurriculumSection = withIntersectionObserver(CurriculumSection);
const ObservedAboutMe = withIntersectionObserver(AboutMe);
const ObservedContactMe = withIntersectionObserver(ContactMe);


const BodyProject = ()=>{
    return(
        <div className="body-project shadowEffect">
            <ObservedMainSection />
            <ObservedPersonalProjects/>
            <ObservedCurriculumSection />
            <ObservedAboutMe/>
            <ObservedContactMe />
        </div>
    )
}

export default BodyProject