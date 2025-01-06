import React from 'react';
import './styles/Footer.css';

const Footer = () => {
	return (
		<div className="footer__container flex-container">
			<div className="footer__container--left flex-container">
				<p>
					My Technician
					<span>
						<i className="bx bx-registered"></i>
					</span>
				</p>
				<p className="footer__presentation">
					Una web diseñada y desarrollada por Eduardo Manrique
				</p>
				<div>
					<i className="bx bxl-linkedin"></i>
					<i className="bx bxl-github"></i>
				</div>
			</div>
			<div className="footer__container--right flex__container">
				<p>EM</p>
			</div>
		</div>
	);
};

export default Footer;
