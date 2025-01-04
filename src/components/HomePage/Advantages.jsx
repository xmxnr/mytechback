import React from 'react';
import './styles/Advantages.css';
import { motion } from 'motion/react';

const Advantages = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			className="adventages__container flex-container"
		>
			<motion.h2 whileHover={{ color: '#342e37' }}>
				Nuestros beneficios
			</motion.h2>
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
		</motion.section>
	);
};

export default Advantages;
