import React from "react";
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/bootstraptoggle.css'
import useDarkMode from "../../functions/useDarkMode";
const SwitchToggle = ()=>{
  const [isChecked, setIsChecked] = useDarkMode()
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

return(
  <Form>
  <Form.Check
    type="switch"
    id="custom-switch"
    onChange={handleToggle}
    checked={isChecked}
    label={
      <label className="label" htmlFor="custom-switch">
          <i class="bi bi-moon"></i>
          <i class="bi bi-sun"></i>
      <div className={`ball ${isChecked ? 'checked' : ''}`}></div>
      </label>
    }
  />
</Form>
)
}
export default SwitchToggle