import React from "react";
import Form from 'react-bootstrap/Form';

const SwitchToggle = ()=>{
return(
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
    </Form>
)
}

export default SwitchToggle