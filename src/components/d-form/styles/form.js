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

export const Frame = styled.div`
  
`;

export const Group = styled.div``;

export const Label = styled.label`
  display: none;
`;



export const Input = styled.input`
  
`;

export const Error = styled.span`
  color: var(--error-color);
  font-size: 15px;
  margin-top: 5px;
  display: inline-block;
`;

export const Submit = styled(Button)`
`;


export const InputPlacement = styled.div`
  
`;