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
		<li>
			<div>
				<span>
					<input
						type="checkbox"
						checked={completed}
						onChange={handelComplete}
					></input>
					{title}
				</span>
				<button onClick={handelDelete}>Delete</button>
			</div>
		</li>
	);
};

export default GoalItems;
