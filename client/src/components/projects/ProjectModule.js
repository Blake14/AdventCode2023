import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';

const ProjectModule = ({ specificProjIndex, block, setSelectedProject }) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				setSelectedProject(specificProjIndex);
				navigate('/project');
			}}
			style={{
				position: 'relative',
				height: 250,
				width: 200,
				background: '#fff',
				marginRight: 15,
				borderRadius: 15,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
				boxShadow:
					'0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
				backgroundImage: `url(https://source.unsplash.com/200x250/?${block.imageSearchString})`,
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: 13,
					left: 13,
				}}
			>
				<Badge bg='success'>New</Badge>
			</div>
			<div
				style={{
					position: 'absolute',
					top: 13,
					left: 65,
				}}
			>
				<Badge bg='secondary'>Updated Recently</Badge>
			</div>
			<div
				style={{
					position: 'absolute',
					bottom: 15,
					right: 13,
					fontSize: 22,
					background: '#000',
					width: 26,
					height: 26,
					borderRadius: '50%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
				}}
			>
				<FaGithub />
			</div>

			<div
				style={{
					position: 'absolute',
					bottom: 15,
					left: 15,
					fontSize: 16,
					color: 'white',
				}}
			>
				{block.likeCount > 0 ? (
					<div
						style={{
							background: '#fff',
							width: 26,
							height: 26,
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							paddingTop: 1,
						}}
					>
						<GoHeartFill
							style={{
								color: '#c1121f',
							}}
						/>
					</div>
				) : (
					<div
						style={{
							background: '#fff',
							width: 26,
							height: 26,
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							paddingTop: 1,
						}}
					>
						<GoHeartFill
							style={{
								color: '#000',
							}}
						/>
					</div>
				)}
			</div>
			<p
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
					fontSize: 35,
					color: '#fff',
					textShadow: '2px 2px 2px black',
				}}
			>
				<strong>{block.shortDesc}</strong>
			</p>
		</div>
	);
};

export default ProjectModule;
