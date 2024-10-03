import React from "react";
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/bootstraptoggle.css';
import useDarkMode from "../../functions/useDarkMode";

const SwitchToggle = () => {
  const [isChecked, handleToggle] = useDarkMode();  
  console.log("SwitchToggle - isChecked:", isChecked);
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        onChange={handleToggle} 
        checked={isChecked}
        />
          <label className="label" htmlFor="custom-switch">
            <i className={`bi ${isChecked ? 'bi-sun' : 'bi-moon-fill'}`}></i>

            <div className={`ball ${isChecked ? 'checked' : ''}`}></div>
          </label>
    </Form>
  );
};

export default SwitchToggle;
