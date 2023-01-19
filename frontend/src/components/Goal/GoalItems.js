import { useDispatch } from 'react-redux';
import { toggleComplete, deleteGoal } from './goalSlice';

const GoalItems = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const handelComplete = () => {
		dispatch(
			toggleComplete({
				id: id,
				completed: !completed, //once clicked false will be true
			})
		);
	};

	const handelDelete = () => {
		dispatch(deleteGoal({ id: id }));
	};

	return (
		<div>
			<input
				onChange={handelComplete}
				type="checkbox"
				checked={completed}
				defaultChecked={false}
			></input>
			{title}

			<button onClick={handelDelete} className="btn btn-danger">
				Delete
			</button>
		</div>
	);
};

export default GoalItems;
