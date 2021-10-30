import * as Yup from 'yup';

export const emailValidation = () => {
	return ({
	          email: Yup.string()
	            .email("Invalid email address")
	            .required("Required"),
	        })
}

export const passwordValidation = () => {
	return ({
		password: Yup.string()
			.min(6, 'Password must more than 6 characters and less than 15')
			.max(15, 'Password must more than 6 characters and less than 15')
			.required('Required')
	});
}