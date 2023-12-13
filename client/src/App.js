import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import Navigation from './components/Navigation';
import Projects from './components/projects/Projects';
import CreateProj from './components/projects/CreateProj';
import AdventHome from './components/AdventHome';
import AdventPuzzle from './components/AdventPuzzle';
import Footer from './components/Footer';
import Project from './components/projects/Project';

const App = () => {
	document.body.style.background = '#E0DDCF';
	document.body.style.color = '#2D232E';
	const [selectedPuzzle, setSelectedPuzzle] = useState([2023, 11]);
	const [selectedProject, setSelectedProject] = useState(0);

	return (
		<Router>
			<div
				style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
			>
				<Navigation />

				<div style={{ flex: 1 }}>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route
							path='/projects'
							element={
								<Projects
									setSelectedProject={setSelectedProject}
									selectedProject={selectedProject}
								/>
							}
						/>
						<Route path='/projects/new' element={<CreateProj />} />
						<Route
							path='/advent'
							element={
								<AdventHome
									selectedPuzzle={selectedPuzzle}
									setSelectedPuzzle={setSelectedPuzzle}
								/>
							}
						/>
						<Route
							path='/advent/puzzle'
							element={
								<AdventPuzzle
									selectedPuzzle={selectedPuzzle}
									setSelectedPuzzle={setSelectedPuzzle}
								/>
							}
						/>
						<Route
							path='/project'
							element={
								<Project
									selectedProject={selectedProject}
									setSelectedProject={setSelectedProject}
								/>
							}
						/>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
