import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { ProjectData } from '../../data/ProjectData';
import SuggestionPane from '../SuggestionPane';
import ProjectModule from './ProjectModule';

const ProjectBar = ({ language, setSelectedProject, selectedProject }) => {
	const [showCategory, setShowCategory] = useState(true);
	return (
		<div style={{ marginBottom: 50 }}>
			<div style={{ height: 20, position: 'relative' }}>
				<div
					style={{
						position: 'absolute',
						left: 5,
						top: -15,
						display: 'flex',
					}}
				>
					<div
						style={{
							fontSize: 25,
							padding: 2,
							cursor: 'pointer',
							fontVariant: 'all-small-caps',
						}}
						onClick={() => {
							setShowCategory(!showCategory);
						}}
					>
						{showCategory ? <MdExpandLess /> : <MdExpandMore />} {language}
					</div>
					<SuggestionPane language={language} />
				</div>
			</div>

			{showCategory && (
				<div
					style={{
						height: '100%',
						display: 'flex',
						justifyContent: 'left',
						alignItems: 'center',
						overflowX: 'scroll',
						paddingTop: 10,
						paddingBottom: 30,
					}}
				>
					{ProjectData.filter((block, index) => {
						return block.category === language;
					}).map((block, index) => {
						const specificProjIndex = ProjectData.findIndex(
							(p) => p.shortDesc === block.shortDesc
						);

						return (
							<ProjectModule
								key={index}
								specificProjIndex={specificProjIndex}
								block={block}
								setSelectedProject={setSelectedProject}
							/>
						);
					})}
				</div>
			)}
			<hr />
		</div>
	);
};

export default ProjectBar;
