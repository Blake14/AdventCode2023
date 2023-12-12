import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<div
			style={{
				width: '100%',
				height: 65,
				fontSize: 32,
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					width: 200,
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<FaGithub />
				<FaLinkedin />
			</div>
		</div>
	);
};

export default Footer;
