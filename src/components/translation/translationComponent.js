import React from "react";
import Form from 'react-bootstrap/Form';
import '../../styles/translationcomponent.css';
import { changeLanguage } from "../translation/translationFunction";
import useLanguageMode from '../../functions/useLanguageMode';

const ChooseLanguage = () => {
  const [isChecked, setIsChecked] = useLanguageMode();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
    
    setIsChecked(selectedLanguage === 'pt'); 
  };

  return (
    <Form id="choose-language">
      <Form.Select 
        size="sm" 
        className="choose-language" 
        value={isChecked ? 'pt' : 'en'} 
        onChange={handleLanguageChange}
      >
        <option value="pt">Português</option>
        <option value="en">English</option>
      </Form.Select>        
    </Form>
  );
};

export default ChooseLanguage;
