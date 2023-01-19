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
		<ul>
			{goals.map((goal) => (
				<GoalItems
					key={goal.id}
					title={goal.title}
					completed={goal.completed}
				/>
			))}
		</ul>
	);
};

export default GoalList;
