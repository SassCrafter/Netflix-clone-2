import React from 'react'
import { Form } from '../';
import { CtaFormGroup, CtaFormSubmit } from './styles/cta-form';
import * as Yup from "yup";


const CtaForm = ({children, ...restProps}) => {
	return (
		<Form {...restProps}
			initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
		>
			<Form.Title>Ready to watch? Enter your email to create or restart your membership</Form.Title>
			<CtaFormGroup>
				<Form.Group>
					<Form.Input id='email' required type='email' name='email' placeholder="Email address"
					 />
				</Form.Group>
				<CtaFormSubmit size='xl' >Get Started</CtaFormSubmit>
			</CtaFormGroup>
		</Form>
	)
}

export default CtaForm