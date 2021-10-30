import styled, { css } from "styled-components/macro";
import { Link } from 'react-router-dom';

const sharedStyle = (props) => css`
  display: inline-block;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: ${props.size};
  padding: 10px 15px;
  background-color: ${props.$btnStyle.bg};
  color: ${props.$btnStyle.color};
  cursor: pointer;

  &:hover {
    background-color: ${props.$btnStyle.hover};
  }
`;

export const ButtonEl = styled.button`
  ${sharedStyle};  
`;

export const LinkEl = styled(Link)`
  ${sharedStyle};
`;
