import React from 'react'
import FancyBorder from './FancyBorder';
import ShowMsg from './ShowMsg';
import Input from './Input';

function Dialog(props) {
    return (
      <FancyBorder>
        <ShowMsg title={props.title} message={props.message} />
       <Input/>
      </FancyBorder>
    );
  }
  
  export default Dialog