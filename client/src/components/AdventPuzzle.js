import React from 'react';
import { AdventData } from '../data/AdventData';

const AdventPuzzle = ({ selectedPuzzle, setSelectedPuzzle }) => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				padding: 20,
			}}
		>
			{AdventData.filter((a, b) => {
				return a.year === selectedPuzzle[0] && a.day === selectedPuzzle[1];
			}).map((a, b) => {
				return (
					<div
						key={b}
						style={{
							width: '100%',
							height: '100%',
						}}
					>
						<div
							style={{
								width: '100%',
								height: '100%',
							}}
						>
							<div
								style={{
									display: 'flex',
								}}
							>
								<p>
									<strong>{`Year : `}</strong>
									{a.year}
								</p>
								<p
									style={{
										marginLeft: 10,
									}}
								>
									<strong>{`Day : `}</strong>
									{a.day}
								</p>
								<p
									style={{
										marginLeft: 10,
									}}
								>
									<strong>{`Status : `}</strong>
									{a.status}
								</p>
							</div>
							<p>
								<strong>{`Link : `}</strong>
								<a href={a.link} target='_blank' rel='noopener noreferrer'>
									{a.link}
								</a>
							</p>
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									width: '100%',
									fontSize: 30,
								}}
							>
								<p>
									<strong>{a.title}</strong>
								</p>
							</div>
							<pre
								style={{
									fontSize: 15,
									width: '100%',
									maxWidth: '100%',
									margin: '0 auto',
									overflowY: 'auto',
								}}
							>
								{a.mainText}
							</pre>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AdventPuzzle;
