import React from 'react';
import { ProjectData } from '../../data/ProjectData';
import Image from 'react-bootstrap/Image';
import { FaRegImage, FaStarOfLife, FaSkull } from 'react-icons/fa';
import CommentSection from '../CommentSection';
import TagPane from '../TagPane';

const Project = ({ setSelectedProject, selectedProject }) => {
	const photoBoothSize = 450;
	return (
		<div>
			{ProjectData.filter((_, i) => {
				return i === selectedProject;
			}).map((proj, index) => {
				return (
					<div
						key={index}
						style={{
							padding: 10,
						}}
					>
						<div
							style={{
								display: 'flex',
							}}
						>
							<div>
								<div>
									<p>
										<strong>Short Description</strong>
										<pre>{proj.shortDesc}</pre>
									</p>
									<p>
										<strong>Long Description</strong>
										<pre>{proj.longDesc}</pre>
									</p>
								</div>
								<p>
									<strong>Images</strong>
								</p>
								<div
									style={{
										height: photoBoothSize + 25,
										width: photoBoothSize + 25,
										//border: '2px solid black',
										display: 'flex',
										flexWrap: 'wrap',
									}}
								>
									{[...Array(16)].map((_, idx) => {
										if (idx < proj.images.length) {
											return (
												<Image
													key={idx}
													src={proj.images[idx]}
													style={{
														height: photoBoothSize / 4,
														width: photoBoothSize / 4,
														margin: 2,
														objectFit: 'cover',
														borderRadius: 10,
													}}
												></Image>
											);
										} else {
											return (
												<div
													key={idx}
													style={{
														height: photoBoothSize / 4,
														width: photoBoothSize / 4,
														backgroundColor: '#f8f9fa',
														margin: 2,
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
														color: '#adb5bd',
														fontSize: 32,
														borderRadius: 10,
													}}
												>
													<FaRegImage />
												</div>
											);
										}
									})}
								</div>
							</div>
							<div
								style={{
									marginLeft: 55,
								}}
							>
								<div>
									<p>
										<strong>Enjoyment Rating</strong>
									</p>
									<div
										style={{
											fontSize: 40,
											color: '#6798c0',
											width: 300,
											display: 'flex',
											justifyContent: 'space-evenly',
										}}
									>
										{[...Array(5)].map((_, i) => {
											if (i <= proj.enjoyRating) {
												return (
													<FaStarOfLife
														key={i}
														style={{
															color: '#003566',
														}}
													/>
												);
											} else {
												return (
													<FaStarOfLife
														key={i}
														style={{
															color: '#adb5bd',
														}}
													/>
												);
											}
										})}
									</div>
								</div>
								<div
									style={{
										marginTop: 25,
									}}
								>
									<p>
										<strong>Difficulty Rating</strong>
									</p>
									<div
										style={{
											fontSize: 40,
											width: 300,
											display: 'flex',
											justifyContent: 'space-evenly',
										}}
									>
										{[...Array(5)].map((_, i) => {
											if (i <= proj.diffRating) {
												return (
													<FaSkull
														key={i}
														style={{
															color: '#ef233c',
														}}
													/>
												);
											} else {
												return (
													<FaSkull
														key={i}
														style={{
															color: '#adb5bd',
														}}
													/>
												);
											}
										})}
									</div>
									<div
										style={{
											marginTop: 25,
										}}
									>
										<p>
											<strong>Tags</strong>
										</p>
										<TagPane tags={proj.tags} />
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
			<div
				style={{
					padding: 20,
				}}
			>
				<CommentSection />
			</div>
		</div>
	);
};

export default Project;
