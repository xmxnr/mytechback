import React, { useEffect, useState } from 'react';
import './styles/Login.css';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';

const Login = () => {
	const clientId =
		'203236353739-ac7fl73a7oq5oda97m4j567n6kfjvfco.apps.googleusercontent.com';

	useEffect(() => {
		const start = () => {
			gapi.auth2.init({
				clientId: clientId,
			});
		};
		gapi.load('client:auth2', start);
	}, []);

	const [user, setUser] = useState();

	const onSucess = (response) => {
		setUser(response.profileObj);
	};

	const onFailure = () => {
		console.log('Something went wrong');
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			className="login__container flex-container"
		>
			<motion.h1 className="login__title" whileHover={{ color: '#cf5c36' }}>
				Bienvenido
			</motion.h1>
			<section></section>
			<span className="material-symbols-outlined">engineering</span>
			<form action="">
				<label>
					<span>Email</span>
					<motion.input type="email" whileHover={{ scale: 1.5 }} />
				</label>
				<label>
					<span>Password</span>
					<motion.input type="password" whileHover={{ scale: 1.5 }} />
				</label>
				<motion.button whileHover={{ scale: 1.2 }}>Acceder</motion.button>
			</form>
			<div className="register__link-container flex-container">
				<p>¿Aún no tienes cuenta?</p>
				<Link to={'/register'}>
					<span>Registrate</span>
				</Link>
				<p>o</p>
				<GoogleLogin
					clientId={clientId}
					onSuccess={onSucess}
					onFailure={onFailure}
					theme="dark"
				/>
			</div>
		</motion.div>
	);
};

export default Login;
