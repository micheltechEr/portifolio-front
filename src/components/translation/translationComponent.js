import React from "react";
import Form from 'react-bootstrap/Form';
import '../../styles/translationcomponent.css'
import { changeLanguage } from "../translation/translationFunction";
const ChooseLanguage = ()=>{
  
  const handleLanguage =(event)=>{
    let selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage)
  }
    return(
    <Form onChange={handleLanguage} id="choose-language">
     <Form.Select size="sm" className="choose-language">
        <option value={"pt"}>Português</option>
        <option value={"en"}>English</option>
      </Form.Select>        
    </Form>
    )
}

export default ChooseLanguage