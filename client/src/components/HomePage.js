import React from 'react';
import aocImage from '../aocImage.png';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { HomeData } from '../data/HomeData';

const HomePage = () => {
	const navigate = useNavigate();
	const GetRandColor = () => {
		const colors = [
			'#e76f51',
			'#28947f',
			'#1360e2',
			'#fe6a86',
			'#fca311',
			'#ffcad4',
			'#8338ec',
			'#ff9f1c',
			'#463f3a',
			'#ce4257',
			'#240046',
		];
		const colorLen = colors.length - 1;
		const randIndex = Math.floor(Math.random() * (colorLen - 0 + 1) + 0);
		return colors[randIndex];
	};
	return (
		<div
			style={{
				height: '100%',
				padding: 20,
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'left',
				fontSize: 55,
				color: '#fff',
				fontVariant: 'all-petite-caps',
				maxWidth: '100%',
			}}
		>
			{HomeData.sort((a, b) => a.order > b.order).map((link, index) => {
				return (
					<div
						key={index}
						style={{
							height: 200,
							width: 400,
							borderRadius: 15,
							backgroundColor: GetRandColor(),
							backgroundImage: `url(https://source.unsplash.com/800x400/?${link.bgImageSearchString})`,
							backgroundSize: 'cover', // Ensures the background image covers the entire container
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center', // Center the background image
							cursor: 'pointer',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							margin: 20,
							color: '#fff', // Text color to ensure visibility on the background
						}}
						onClick={() => {
							navigate(link.link);
						}}
					>
						<p
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
								textAlign: 'center',
							}}
						>
							{link.title}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default HomePage;
