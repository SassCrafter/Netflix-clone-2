import React from "react";
import { ButtonEl } from "./style/button";

const Button = ({ children, size = "s", ...restProps }) => {
  const sizes = {
    s: "16px",
    m: "18px",
    l: "22px",
    xl: "28px",
  };
  
  return (
    <ButtonEl size={sizes[size]} {...restProps}>
      {children}
    </ButtonEl>
  );
};

export default Button;
