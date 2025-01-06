import React from 'react';
import './styles/HomePage.css';
import { motion } from 'motion/react';
import Advantages from '../components/HomePage/Advantages';
import { div } from 'motion/react-client';

const HomePage = () => {
	return (
		<>
			<div className="home__container flex-container">
				<section className="images__container grid-container">
					<div className="landing__container container__left">
						<img src="/landing-page-image.jpg" alt="landingimage1" />
					</div>
					<div className="landing__container container__center">
						<img src="/landing-page-image1.jpg" alt="landingimage2" />
					</div>
					<div className="landing__container container__right">
						<img src="/landing-page-image2.jpg" alt="landingimage3" />
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						className="landing__container container__down"
					>
						<img src="/landing-page-image4.jpg" alt="landingimage4" />
					</motion.div>
				</section>
				<Advantages />
			</div>
		</>
	);
};

export default HomePage;
