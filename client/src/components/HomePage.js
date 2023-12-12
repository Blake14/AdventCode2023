import React from 'react';
import aocImage from '../aocImage.png';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const HomePage = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				padding: 20,
				display: 'flex',
				justifyContent: 'space-evenly',
				fontSize: 28,
				color: '#fff',
				fontVariant: 'all-petite-caps',
			}}
		>
			<div
				style={{
					height: 200,
					width: 400,
					borderRadius: 15,
					backgroundColor: '#fff',
					backgroundSize: '95%',
					backgroundRepeat: 'no-repeat',
					backgroundImage: `url(${aocImage})`,
					cursor: 'pointer',
					position: 'relative',
				}}
				onClick={() => {
					navigate('/advent');
				}}
			>
				<Badge
					style={{
						position: 'absolute',
						top: 10,
						left: 0,
						transform: 'rotate(-45deg)',
					}}
					bg='success'
				>
					<h3>New!</h3>
				</Badge>
			</div>

			<div
				style={{
					height: 200,
					width: 400,
					borderRadius: 15,
					backgroundColor: '#00509d',
					backgroundSize: '95%',
					backgroundRepeat: 'no-repeat',
					cursor: 'pointer',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				Suggest a Project
			</div>
			<div
				style={{
					height: 200,
					width: 400,
					borderRadius: 15,
					backgroundColor: '#c1121f',
					backgroundSize: '95%',
					backgroundRepeat: 'no-repeat',
					cursor: 'pointer',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				Recent Projects
			</div>
			<div
				style={{
					height: 200,
					width: 400,
					borderRadius: 15,
					backgroundColor: '#59cd90',
					backgroundSize: '95%',
					backgroundRepeat: 'no-repeat',
					cursor: 'pointer',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				Favorites
			</div>
		</div>
	);
};

export default HomePage;
