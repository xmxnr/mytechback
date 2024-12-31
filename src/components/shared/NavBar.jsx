import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
	return (
		<nav className="nav__container">
			<ul className="flex-container">
				<li>Home</li>
				<li>Conocenos</li>
				<li>Registrate</li>
				<li>Ingresa</li>
			</ul>
		</nav>
	);
};

export default NavBar;
