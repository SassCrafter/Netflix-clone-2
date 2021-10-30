import React from 'react'
import { Header } from '../components';
import * as Routes from '../constants/routes';
import Logo from '../logo.svg';

export default function HeaderContainer({ children, ...restProps }) {
	return (
		<Header {...restProps}>
			<Header.Frame>
				<Header.Logo to={Routes.HOME} src={Logo} alt='netflix'/>
				<Header.ButtonLink to={Routes.SIGN_IN} link>Sign in</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	)
}