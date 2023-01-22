import { useDispatch } from 'react-redux';
import { deleteGoal } from './goalSlice';
import { toggleCompleteAsync } from './goalSlice';

const GoalItems = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleComplete = () => {
		console.log('handleComplete', id, completed);
		dispatch(toggleCompleteAsync({ id: id, completed: !completed }));
	};

	const handleDelete = () => {
		dispatch(deleteGoal({ id: id })); //it needs to know the id as we're filtering the id, so we're passing it as the payload
	};

	return (
		<li>
			<div>
				<span>
					<input
						type="checkbox"
						checked={completed}
						onChange={handleComplete}
					></input>
					{title}
				</span>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</li>
	);
};

export default GoalItems;
