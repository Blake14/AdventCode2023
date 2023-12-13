import React from 'react';
import ProjectBar from './ProjectBar';
import { ProjectData } from '../../data/ProjectData';

const Projects = ({ setSelectedProject, selectedProject }) => {
	const uniqCategories = [];
	ProjectData.map((p, i) => {
		if (!uniqCategories.includes(p.category)) {
			uniqCategories.push(p.category);
		}
		return null;
	});
	console.log(uniqCategories);
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				padding: 20,
			}}
		>
			{[...Array(uniqCategories.length)].map((bar, index) => {
				return (
					<ProjectBar
						key={index}
						setSelectedProject={setSelectedProject}
						selectedProject={selectedProject}
						language={uniqCategories[index]}
					/>
				);
			})}
		</div>
	);
};

export default Projects;
