import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Header,
  Body,
  Title,
  Text,
  Icon,
  Frame,
  Item,
} from "./style/accordion";

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  const updateToggle = () => {
    setToggleShow((toggleShow) => !toggleShow);
  };
  return (
    <Header {...restProps} onClick={updateToggle}>
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <Body {...restProps} className={toggleShow ? "open" : ""}>
      {children}
    </Body>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Text = function AccordionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Accordion.Icon = function AccordionIcon({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <Icon {...restProps} className={toggleShow ? "open" : ""}>
      +
    </Icon>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

export default Accordion;
