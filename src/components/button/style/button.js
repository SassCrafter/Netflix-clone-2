import styled from "styled-components/macro";

export const ButtonEl = styled.button.attrs((props) => ({
  size: props.size || "16px",
}))`
  display: inline-block;
  border: none;
  text-decoration: none;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: var(--primary-color);
  color: white;
  font-size: ${(props) => props.size};
  padding: 10px;
`;
