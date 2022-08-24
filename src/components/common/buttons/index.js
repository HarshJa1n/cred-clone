import React from "react";
import "./button.css";

const Button = ({ buttonText, onClick, prefix, customClass }) => {
  return (
    <div className={`button-wrapper flex make-center ${customClass}`}>
      {prefix} {buttonText}
    </div>
  );
};

export default Button;
