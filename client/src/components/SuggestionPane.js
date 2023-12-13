import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SuggestionPane = ({ language }) => {
	const [showModal, setShowModal] = useState(false);
	const [suggestion, setSuggestion] = useState('');

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	const handleSuggestionChange = (e) => {
		setSuggestion(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleClose();
	};

	return (
		<div>
			<p
				style={{
					marginTop: 15,
					marginLeft: 20,
					fontSize: 10,
					color: '#4a4e69',
					cursor: 'pointer',
				}}
				onClick={handleShow}
			>
				{`Suggest a ${language} Project?`}
			</p>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{`Suggest a ${language} Project`}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='suggestionForm'>
							<Form.Label>Project Suggestion</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								value={suggestion}
								onChange={handleSuggestionChange}
								placeholder='Design a website with ...'
							/>
							<Form.Label>Category: </Form.Label>
							<Form.Control placeholder='Category' value={language} disabled />
						</Form.Group>
						<Button
							style={{
								marginTop: 20,
							}}
							variant='success'
							type='submit'
						>
							Send
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default SuggestionPane;
