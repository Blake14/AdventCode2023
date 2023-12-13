import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const ProjectBar = ({ language }) => {
	const [showCategory, setShowCategory] = useState(true);
	const randomProjectCnt = Math.floor(Math.random() * (10 - 1 + 1) + 1);
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
					<div>
						<p
							style={{
								marginTop: 15,
								marginLeft: 20,
								fontSize: 10,
								color: '#4a4e69',
								cursor: 'pointer',
							}}
						>
							Suggest a Project?
						</p>
					</div>
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
					{[...Array(randomProjectCnt)].map((block, index) => {
						return (
							<div
								key={index}
								style={{
									minHeight: 250,
									minWidth: 200,
									background: '#fff',
									marginRight: 15,
									borderRadius: 15,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<p
									style={{
										width: '100%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										fontSize: 18,
										color: '#ced4da',
									}}
								>
									{`
                  Project Not
                  Found
                  `}
								</p>
							</div>
						);
					})}
				</div>
			)}
			<hr />
		</div>
	);
};

export default ProjectBar;
