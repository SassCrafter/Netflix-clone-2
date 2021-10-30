import React from "react";
import styled from "styled-components/macro";

const Container = styled.section`
  width: 100%;
  padding: 50px 5%;
  max-width: var(--max-width);
  overflow: hidden;
  margin: 0 auto;
`;

const Section = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Section;
