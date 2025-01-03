import React from 'react';
import './styles/NavBar.css';
import { motion } from 'motion/react';

const NavBar = () => {
	return (
		<div className="nav__container">
			<ul className="flex-container">
				<li>
					<div className="logo__container">
						<img src="/icon_image.svg" alt="logo image" />
					</div>
				</li>
				<li>Conocenos</li>
				<li>
					<div className="button__container">
						<button>Acceder</button> o<button>Registrate</button>
					</div>
				</li>
			</ul>
			<div className="specialties__container flex-container">
				<ul>Albañilería</ul>
				<ul>Plomería</ul>
				<ul>Electricidad</ul>
				<ul>Carpintería</ul>
				<ul>Pintura</ul>
			</div>
		</div>
	);
};

export default NavBar;
