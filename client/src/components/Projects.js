import React from 'react';
import ProjectBar from './ProjectBar';

const Projects = () => {
	const languagesTemp = [
		'JavaScript / ReactJS',
		'Blender',
		'Machine Learning',
		'Design',
		'Games',
		'Other / Misc',
	];
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				padding: 20,
			}}
		>
			{[...Array(5)].map((bar, index) => {
				return <ProjectBar key={index} language={languagesTemp[index]} />;
			})}
		</div>
	);
};

export default Projects;
