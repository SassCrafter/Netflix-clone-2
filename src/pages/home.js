import React from 'react'
import { Header, Jumbotron, Footer, Faq } from "../containers/";
import { Feature, CtaForm } from '../components';

const Home = () => {
	return (
		<>
			<Header>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
					<CtaForm />
				</Feature>
			</Header>
      		<Jumbotron />
      		<Faq />
     		<Footer />
    	</>
	)
}

export default Home