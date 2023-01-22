import { useSelector } from 'react-redux';
import GoalItems from './GoalItems';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGoalsAsync } from './goalSlice';

const GoalList = () => {
	const dispatch = useDispatch();
	const goals = useSelector((state) => state.goals); //take all the goals to the state and assign it to the state variable

	useEffect(() => {
		dispatch(getGoalsAsync());
	}, [dispatch]);
	return (
		<ul>
			{goals.map((goal) => (
				<GoalItems id={goal.id} title={goal.title} completed={goal.completed} />
			))}
		</ul>
	);
};

export default GoalList;
