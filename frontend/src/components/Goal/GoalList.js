import { useSelector, useDispatch } from 'react-redux';
import GoalItems from './GoalItems';
import { useEffect } from 'react';
import { getGoalsAsync } from './goalSlice';

const GoalList = () => {
	const dispatch = useDispatch();
	const goals = useSelector((state) => state.goal);
	useEffect(() => {
		dispatch(getGoalsAsync());
	}, [dispatch]);

	return (
		<ul className="list-group">
			{goals.map((todo) => (
				<GoalItems
					key={todo.id}
					title={todo.title}
					completed={todo.completed}
				/>
			))}
		</ul>
	);
};

export default GoalList;
