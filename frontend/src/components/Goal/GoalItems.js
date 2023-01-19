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
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className="d-flex justify-content-between">
				<span className="d-flex align-items-center">
					<input
						onChange={handelComplete}
						type="checkbox"
						checked={completed}
						defaultChecked={false}
					></input>
					{title}
				</span>
				<button onClick={handelDelete} className="btn btn-danger">
					Delete
				</button>
			</div>
		</li>
	);
};

export default GoalItems;
