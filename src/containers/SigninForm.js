import React from 'react'
import { Form } from '../components';
import { emailValidation, passwordValidation } from '../utils/validationSchema';
import * as Yup from 'yup';

export default function SigninForm() {
	return (
		<Form
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={Yup.object(emailValidation(), passwordValidation(),)}
			onSubmit={(values, { setSubmitting }) => {
	        	console.log('Submited')
	          	setTimeout(() => {
	            	setSubmitting(false);
	          	}, 400);
	        }}
		>
			<Form.Title>Sign In</Form.Title>
			<Form.Group>
				<Form.Input type='email' name='email' id='email' placeholder="Email address"
				 />
			</Form.Group>
		</Form>
	)
}