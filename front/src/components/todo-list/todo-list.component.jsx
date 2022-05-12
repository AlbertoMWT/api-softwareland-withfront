// Components
import TodoItem from '../todo-item/todo-item.component';

import classes from './todo-list.styles.module.css';

const TodoList = ({ items, onEditTodo, onDeleteTodo }) => {
	console.log(items.length)
	return (
		<div className={classes.list}>
			{/* Render list of todos */}
			{items.length > 0 &&
				items.map[0](({ name }) => (
					<TodoItem
						name={name}
						onEditHandler={onEditTodo}
						onDeleteHandler={onDeleteTodo}
					/>
				))}

			{/* Show message if list is empty */}
			{items.length === 0 && (
				<p className={classes.message}>No pending To Do's</p>
			)}
		</div>
	);
};

export default TodoList;
