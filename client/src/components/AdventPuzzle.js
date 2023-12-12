import React, { useState } from 'react';
import { AdventData } from '../data/AdventData';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import starGray from '../grayStar.png';
import starYellow from '../yellowStar.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AdventPuzzle = ({ selectedPuzzle, setSelectedPuzzle }) => {
	const [showResult, setShowResult] = useState(false);
	const statusArray = [
		'Complete',
		'Not Started',
		'Pending',
		'In Progress',
		'Created',
	];
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				padding: 20,
				position: 'relative',
			}}
		>
			{AdventData.filter((a, b) => {
				return a.year === selectedPuzzle[0] && a.day === selectedPuzzle[1];
			}).map((a, b) => {
				return (
					<div
						style={{
							width: '100%',
							height: '100%',
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: 0,
								right: 0,
								height: 150,
								padding: 50,
							}}
						>
							<Image
								style={{
									height: '100%',
								}}
								src={a.status === 'Complete' ? starYellow : starGray}
							></Image>
						</div>
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
											display: 'flex',
										}}
									>
										<strong>{`Status : `}</strong>
										<DropdownButton
											eventKey='1'
											size='sm'
											style={{
												marginLeft: 10,
											}}
											variant='success'
											title={a.status}
										>
											{statusArray
												.filter((sa, ix) => {
													return sa !== a.status;
												})
												.sort((a, b) => a > b)
												.map((sa, ix) => {
													return (
														<Dropdown.Item key={ix} eventKey={ix + 2}>
															{sa}
														</Dropdown.Item>
													);
												})}
										</DropdownButton>
									</p>
								</div>
								<div>
									<InputGroup
										className='mb-3'
										style={{
											marginLeft: 50,
										}}
									>
										<InputGroup.Checkbox
											checked={showResult}
											onChange={() => setShowResult(!showResult)}
											disabled={
												a.status === 'Created' || a.status === 'Not Started'
											}
										/>
										<Form.Control
											type='text'
											value={
												showResult &&
												a.status !== 'Created' &&
												a.status !== 'Not Started'
													? a.answers[0]
													: ''
											}
											disabled={!showResult && a.status !== 'Complete'}
											placeholder={
												a.status !== 'Created' && a.status !== 'Not Started'
													? '<- Unhide My Answer'
													: 'Not Yet Attempted'
											}
											aria-label='Text input with checkbox'
										/>
									</InputGroup>
								</div>
							</div>
							<p>
								<strong>{`Link : `}</strong>
								<a href={a.link} target='_blank' rel='noopener noreferrer'>
									{a.link}
								</a>
							</p>
							<p>
								<strong>{`See Code : `}</strong>
								<a
									href={'www.github.com/blake14'}
									target='_blank'
									rel='noopener noreferrer'
								>
									GitHub Link
								</a>
							</p>
							<p>
								<strong>{`Component (if applicable) : `}</strong>
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
