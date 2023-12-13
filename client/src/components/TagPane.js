import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { IoInformationCircle } from 'react-icons/io5';

const TagPane = ({ tags }) => {
	return (
		<div
			style={{
				width: 225,
				display: 'flex',
				justifyContent: 'left',
				flexWrap: 'wrap',
			}}
		>
			{tags.map((tag, idx) => {
				return (
					<Badge
						style={{
							margin: 5,
							width: 150,
							position: 'relative',
						}}
						key={idx}
						bg='success'
					>
						<IoInformationCircle
							style={{
								position: 'absolute',
								left: 3,
								fontSize: 18,
								top: 4,
								color: '#caf0f8',
							}}
						/>
						<p
							style={{
								width: 100,
								textAlign: 'left',
								marginLeft: 20,
								height: 0,
								marginTop: 2,
							}}
						>
							{tag}
						</p>
					</Badge>
				);
			})}
		</div>
	);
};

export default TagPane;
