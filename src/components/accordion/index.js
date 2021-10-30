import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Header,
  Body,
  Answer,
  Title,
  Question,
  Text,
  Icon,
  Item,
} from "./style/accordion";

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  const [toggleShowId, setToggleShowId] = useState(null);
  return (
    <ToggleContext.Provider value={{ toggleShowId, setToggleShowId }}>
      <Container {...restProps}>
        <Inner>{children}</Inner>
      </Container>
    </ToggleContext.Provider>
  );
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Accordion.Header = function AccordionHeader({ id, children, ...restProps }) {
  const { toggleShowId, setToggleShowId } = useContext(ToggleContext);
  const updateToggle = () => {
    setToggleShowId(id === toggleShowId ? null : id);
  };
  return (
    <Header {...restProps} onClick={updateToggle}>
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ id, children, ...restProps }) {
  const { toggleShowId } = useContext(ToggleContext);
  // return toggleShowId === id ? <Body {...restProps}>{children}</Body> : null;
  return (
    <Body {...restProps} className={toggleShowId === id ? "open" : ""}>
      <Answer>{children}</Answer>
    </Body>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Question = function AccordionQuestion({ children, ...restProps }) {
  return <Question {...restProps}>{children}</Question>;
};

Accordion.Text = function AccordionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Accordion.Icon = function AccordionIcon({ id, children, ...restProps }) {
  const { toggleShowId } = useContext(ToggleContext);
  const iconPath = "images/icons/add.png";
  return (
    <Icon
      {...restProps}
      src={iconPath}
      alt="Open or close icon"
      className={toggleShowId === id ? "open" : ""}
    />
  );
};

export default Accordion;
