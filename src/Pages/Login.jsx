import React from 'react';
import './styles/Login.css';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="login__container flex-container">
			<h1 className="login__title">Bienvenido</h1>
			<section></section>
			<span className="material-symbols-outlined">engineering</span>
			<form action="">
				<label>
					<span>Email</span>
					<input type="email" />
				</label>
				<label>
					<span>Password</span>
					<input type="password" />
				</label>
				<motion.button whileHover={{ scale: 1.2 }}>Acceder</motion.button>
			</form>
			<div className="register__link-container flex-container">
				<p>Aún no tienes cuenta?</p>
				<Link to={'/register'}>
					<span>Registrate</span>
				</Link>
			</div>
		</div>
	);
};

export default Login;
