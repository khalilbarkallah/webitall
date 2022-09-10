import React from 'react';
import { Content } from '../Components/Content/Content';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../Data/HeroData';

const Home = () => {
	return (


		<>

			<Nav />
			<Hero/>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
		</>
	);
};

export default Home;
