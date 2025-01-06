import React from 'react';
import './styles/NavBar.css';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="nav__container">
			<ul className="navbar__upper flex-container">
				<li>
					<div className="logo__container">
						<img src="/icon_image.svg" alt="logo image" />
					</div>
				</li>
				<Link to={'/'}>
					<li className="navbar__title">Conocenos</li>
				</Link>
				<li>
					<div className="button__container">
						<Link to={'/login'}>
							<button>Acceder</button>
						</Link>
						<span>o</span>
						<Link to={'/Register'}>
							<button>Registrate</button>
						</Link>
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
