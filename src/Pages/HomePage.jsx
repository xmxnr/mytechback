import React from 'react';
import './styles/HomePage.css';
import { motion } from 'motion/react';

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
					<img src="/landing-page-image1.jpg" alt="landingimage2" />
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
			<section className="adventages__container flex-container">
				<h2>Nuestros beneficios</h2>
				<div className="adventages__textcontainer flex-container">
					<motion.div
						animate={{ rotate: 360 }}
						whileHover={{ scale: 1.2, transition: 0.5 }}
						whileTap={{ scale: 0.5 }}
						className="icon__container"
					>
						<span className="material-symbols-outlined">construction</span>
						<p>Expertos certificados en más de 4 especialidades.</p>
					</motion.div>
					<motion.div
						animate={{ rotate: 360 }}
						whileHover={{ scale: 1.2, transition: 0.5 }}
						whileTap={{ scale: 0.5 }}
						className="icon__container"
					>
						<span className="material-symbols-outlined">paid</span>
						<p>Precios claros y sin sorpresas</p>
					</motion.div>
					<motion.div
						animate={{ rotate: 360 }}
						whileHover={{ scale: 1.2, transition: 0.5 }}
						whileTap={{ scale: 0.5 }}
						className="icon__container"
					>
						<span className="material-symbols-outlined">person_check</span>
						<p>Reseñas de usuarios reales para ayudarte a decidir.</p>
					</motion.div>
					<motion.div
						animate={{ rotate: 360 }}
						whileHover={{ scale: 1.2, transition: 0.5 }}
						whileTap={{ scale: 0.5 }}
						className="icon__container"
					>
						<span className="material-symbols-outlined">plumbing</span>
						<p>Acceso a técnicos en tiempo real</p>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
