import { useState } from 'react';
// Components
import Button from '../UI/button/button.component';

import classes from './todo-item.styles.module.css';

const TodoItem = ({ id, name, onEditHandler, onDeleteHandler }) => {
	// State
	const [showEditForm, setShowEditForm] = useState(false);
	const [editname, setEditName] = useState(name);

	const showEditFormHandler = () => {
		setShowEditForm(prevState => !prevState);
	};

	const onChangeHandler = event => {
		const updatedValue = event.target.value;
		setEditName(updatedValue);
	};

	const onEditTodoHandler = () => {
		onEditHandler(id, editname);
		setShowEditForm(false);
	};

	const onDeleteTodoHandler = () => {
		onDeleteHandler(id);
	};

	return (
		<div className={classes.item}>
			{(
				<p className={classes.name}>Hola</p>
			)}

			{/* Action Buttons */}
			<div className={classes['action-buttons']}>
				<Button
					onClick={showEditFormHandler}
					type="button"
					label={showEditForm ? 'Cancel' : 'Edit'}
				/>
				<Button onClick={onDeleteTodoHandler} type="button" label="Delete" />
			</div>
		</div>
	);
};

export default TodoItem;
