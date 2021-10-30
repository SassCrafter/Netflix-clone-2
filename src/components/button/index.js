import React from "react";
import { ButtonEl, LinkEl } from "./style/button";

const Button = ({ children, link = false, size = "s", btnStyle='primary', ...restProps }) => {
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

  const button = <ButtonEl size={sizes[size]} $btnStyle={styles[btnStyle]} {...restProps}>{children}</ButtonEl>;
  const linkEl = <LinkEl size={sizes[size]} $btnStyle={styles[btnStyle]} {...restProps}>{children}</LinkEl>;


  return link ? linkEl : button;
};

export default Button;
