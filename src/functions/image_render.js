import curriculumImage from '../../src/img/pt_curriculum.png'
import curriculumEngl from '../../src/img/en_curriculum.png'
import contact from '../../src/img/contact.png'
import encontact from '../../src/img/en_contact.png'

   export  const ImageRenderCurriculum = ({ isEnglish }) => {
    console.log('Current ',isEnglish)
       if (isEnglish === 'en') {
           return <img src={curriculumEngl} className="curriculum-image" alt="Curriculum Im" />
       }
       return <img src={curriculumImage} className="curriculum-image" alt="Img do Curriculo" />
   }
   
    export const ImageContact = ({isEnglish})=>{
       if(isEnglish === 'en'){
           return  <img src={encontact} alt="contact-info"/>
       }
       return  <img src={contact} alt="contact-info"/>
   }
   
    export const MainSubTitle = ({isEnglish})=>{
       if(isEnglish === 'en'){
           return  <h2>Front-End<span>&#123;Developer&#125;</span></h2>
       }
       return  <h2>Desenvolvedor<span>&#123;Front-End&#125;</span></h2>
   }
