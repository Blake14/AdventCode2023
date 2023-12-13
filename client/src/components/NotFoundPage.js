import React from 'react';
import FourOhFour from '../404.png';
import Image from 'react-bootstrap/Image';

const NotFoundPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
				fontSize: 80,
				color: '#212529',
				marginTop: 75,
			}}
		>
			<Image src={FourOhFour}></Image>
		</div>
	);
};

export default NotFoundPage;
