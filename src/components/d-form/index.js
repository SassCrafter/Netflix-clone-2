import React from "react";
import { Formik, useField } from "formik";
import { FormContainer, Title, Frame, Group, InputPlacement, Label, Input, Error, Submit } from './styles/form';

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

Form.Frame = function FormFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Form.InputPlacement = function FormInputPlacement({
  children,
  ...restProps
}) {
  return <InputPlacement {...restProps}>{children}</InputPlacement>;
};

Form.Input = function FormInput({ ...restProps }) {
  const [field, meta] = useField(restProps);
  console.log(JSON.stringify(meta.error, null, 2))
  return (
    <>
      <Input {...field} {...restProps} autoComplete="off"
       error={meta.error} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
};


Form.TextField = function FormTextField({label, id, ...restProps}) {
  return (
    <Form.Group>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Input id={id} {...restProps} />
    </Form.Group>
  )
}

// Form.Input = function FormInput({ label, ...restProps }) {
//   const [field, meta] = useField(restProps);
//   return (
//     <>
//       <Input {...field} {...restProps} />
//       {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
//     </>
//   );
// };

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return (
    <Submit type="submit" {...restProps}>
      {children}
    </Submit>
  );
};

export default Form;
