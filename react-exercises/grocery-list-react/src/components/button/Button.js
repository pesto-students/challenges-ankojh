import React from 'react';
import './Button.css'

const Button = ({children, onClick, disabled}) => {


  function buttonClicked(){
    onClick && onClick();
  }

  return (
    <button 
    className="App-Button"
    disabled={disabled}
    onClick={buttonClicked}>{children}</button>
  );
};

export default Button;