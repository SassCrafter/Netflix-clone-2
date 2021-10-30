import React from "react";
import { ButtonEl } from "./style/button";

const Button = ({ children, size = "s", btnStyle='primary', ...restProps }) => {
  const sizes = {
    s: "16px",
    m: "18px",
    l: "22px",
    xl: "28px",
  };

  const styles = {
    primary: {
      bg: 'var(--primary-color)',
      color: 'white',
      hover: 'var(--primary-color-hover)'
    },
  }
  
  return (
    <ButtonEl size={sizes[size]} btnStyle={styles[btnStyle]} {...restProps}>
      {children}
    </ButtonEl>
  );
};

export default Button;
