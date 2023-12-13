import React from 'react';

const ColorCommand = ({ setBgColor }) => {
	const bgColorArray = ['#ffcdb2', '#E0DDCF', '#eae2b7'];
	return (
		<div
			style={{
				minWidth: 200,
				minHeight: 70,
				fontSize: 18,
				borderRadius: 15,
				backgroundColor: '#212529',
				height: 50,
				cursor: 'pointer',
			}}
		>
			<div
				style={{
					width: '100%',
					height: 15,
					background: '#fff',
					borderTopLeftRadius: 15,
					borderTopRightRadius: 15,
					fontVariant: 'all-small-caps',
					fontSize: 12,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				Background Color
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					paddingTop: 10,
				}}
			>
				{bgColorArray.map((c, i) => {
					return (
						<div
							key={i}
							onClick={() => {
								setBgColor(c);
							}}
							style={{
								background: c,
								width: 30,
								height: 30,
								borderRadius: 8,
								border: '2px solid white',
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ColorCommand;
