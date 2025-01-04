import React from 'react';
import './styles/HomePage.css';
import { motion } from 'motion/react';
import Advantages from '../components/HomePage/Advantages';

const HomePage = () => {
	return (
		<div className="home__container flex-container">
			<section className="images__container grid-container">
				<div className="landing__container container__left">
					<img src="/landing-page-image.jpg" alt="landingimage1" />
					<p>
						Construir sueños nunca fue tan fácil. Conecta con expertos en un
						clic.
					</p>
				</div>
				<div className="landing__container container__center">
					<motion.img
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ ease: 'easeOut', duration: 2 }}
						src="/landing-page-image1.jpg"
						alt="landingimage2"
					/>
					<p>Empieza hoy mismo. Tu proyecto merece a los mejores técnicos.</p>
				</div>
				<div className="landing__container container__right">
					<img src="/landing-page-image2.jpg" alt="landingimage3" />
					<p>
						Conecta con expertos certificados en albañilería, plomería,
						electricidad, carpintería y más.
					</p>
				</div>
			</section>
			<Advantages />
		</div>
	);
};

export default HomePage;
