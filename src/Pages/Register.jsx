import React from 'react';
import './styles/Register.css';
import { motion } from 'motion/react';

const Register = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			className="register__container flex-container"
		>
			<div className="register__container--left">
				<h2>Registrate</h2>
				<form className="form__container ">
					<label>
						<span>Nombre(s)</span>
						<input type="text" required />
					</label>
					<label>
						<span>Apellido</span>
						<input type="text" required />
					</label>
					<label>
						<span>Edad</span>
						<input type="number" required />
					</label>
					<label>
						<span>Compañia</span>
						<input type="text" />
					</label>
					<label>
						<span>Correo</span>
						<input type="email" required />
					</label>
					<label>
						<span>Contraseña</span>
						<input type="password" required />
					</label>
					<motion.button
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.2 }}
						className="button__register"
					>
						Registrarse
					</motion.button>
				</form>
			</div>
			<div className="register__container--right">
				<img src="/public/register_landing.jpg" alt="" srcset="" />
			</div>
		</motion.div>
	);
};

export default Register;
