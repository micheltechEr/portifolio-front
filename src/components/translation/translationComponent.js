import React from "react";
import Form from 'react-bootstrap/Form';
import '../../styles/translationcomponent.css'
const ChooseLanguage = ()=>{
    return(
    <Form>
     <Form.Select size="sm" className="choose-language">
        <option value={"pt-br"}>Português</option>
        <option value={"en"}>English</option>
      </Form.Select>        
    </Form>
    )
}

export default ChooseLanguage