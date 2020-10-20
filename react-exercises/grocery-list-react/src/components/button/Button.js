import React from 'react';
import './Button.css'

const Button = ({children, onClick}) => {


  function buttonClicked(){
    onClick && onClick();
  }

  return (
    <button onClick={buttonClicked}>{children}</button>
  );
};

export default Button;