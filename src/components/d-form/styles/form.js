import styled from "styled-components/macro";
import { Form as FormikForm } from "formik";
import Button from "../../button";

export const FormContainer = styled(FormikForm)`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;


export const Group = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: white;
  display: block;
  font-size: 14px;

  ${({ type }) => type === 'float' ? `
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: font-size 0.1s ease,top 0.1s ease;
  ` : `
  `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #383838;
  outline: none;
  background-color: #333;
  color: white;
  transition: border 200ms linear;
  cursor: pointer;

  :focus, :hover {
    border: 1px solid var(--secondary-color) !important;
  }

  :not(:focus), :not(hover) {
    ${({error}) => error && `
    border-bottom: 2px solid var(--error-color)
  `}
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;

`;

export const Error = styled.span`
  color: var(--error-color);
  font-size: 15px;
  margin-top: 5px;
  display: block;
`;

export const Submit = styled(Button)``;

export const InputPlacement = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  :focus-within ${Label}, input:valid ${Label} {
    top: 10px;
    font-size: 13px;
  }
`;
