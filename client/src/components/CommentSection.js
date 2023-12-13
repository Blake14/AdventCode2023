import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CommentSection = () => {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState('');

	const handleCommentChange = (e) => {
		setNewComment(e.target.value);
	};

	const handleAddComment = () => {
		if (newComment.trim() !== '') {
			setComments([...comments, newComment]);
			setNewComment('');
		}
	};

	return (
		<div>
			<h5>Comments</h5>
			<div>
				{comments.map((comment, index) => (
					<div
						key={index}
						style={{
							borderRadius: 15,
							background: '#e9ecef',
							padding: 10,
							marginBottom: 15,
							marginTop: 15,
							display: 'flex',
							fontVariant: 'all-small-caps',
						}}
					>
						<div
							style={{
								width: 120,
								alignItems: 'center',
								textAlign: 'center',
								marginRight: 20,
							}}
						>
							<p
								style={{
									fontSize: 11,
									width: 120,
									fontFamily: 'monospace',
								}}
							>
								{' '}
								2023-12-12 15:20
							</p>
							<hr />
							<p
								style={{
									height: 0,
									marginTop: -15,
									fontFamily: 'monospace',
								}}
							>
								From: Admin
							</p>
						</div>
						<p
							style={{
								width: '100%',
								paddingBottom: 15,
							}}
						>{`"${comment}" -Admin`}</p>
					</div>
				))}
			</div>
			<Form>
				<FormControl
					as='textarea'
					rows={3}
					placeholder='Write a comment...'
					value={newComment}
					onChange={handleCommentChange}
					style={{
						marginTop: 20,
					}}
				/>
				<Button
					style={{
						marginTop: 20,
					}}
					variant='info'
					onClick={handleAddComment}
				>
					Add Comment
				</Button>
			</Form>
		</div>
	);
};

export default CommentSection;
