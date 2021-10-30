import React from "react";
import { Formik, useField } from "formik";
import { FormContainer, Title, Group, InputPlacement, Label, Input, InputContainer, Error, Submit } from './styles/form';

const Form = ({ children, ...restProps }) => {
  return (
    <Formik {...restProps}>
      <FormContainer>{children}</FormContainer>
    </Formik>
  );
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Form.Label = function FormLabel({ children, type='block', ...restProps }) {
  console.log(type);
  return <Label type={type} {...restProps}>{children}</Label>;
};

Form.InputPlacement = function FormInputPlacement({
  children,
  ...restProps
}) {
  return <InputPlacement {...restProps}>{children}</InputPlacement>;
};

Form.InputContainer = function FormInputContainer({ children, ...restProps }) {
  return <InputContainer {...restProps}>{children}</InputContainer>
}

Form.Input = function FormInput({ ...restProps }) {
  const [field, meta] = useField(restProps);
  return (
    <>
      <Input {...field} {...restProps}
       error={meta.error} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
};


Form.Submit = function FormSubmit({ children, ...restProps }) {
  return (
    <Submit type="submit" {...restProps}>
      {children}
    </Submit>
  );
};

export default Form;
