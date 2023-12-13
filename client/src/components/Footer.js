import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ColorCommand from './ColorCommand';

const Footer = ({ setBgColor }) => {
	return (
		<div
			style={{
				width: '100%',
				height: 100,
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
				<ColorCommand setBgColor={setBgColor} />
				<FaGithub
					style={{
						minWidth: 200,
					}}
				/>
				<FaLinkedin
					style={{
						minWidth: 200,
					}}
				/>
			</div>
		</div>
	);
};

export default Footer;
