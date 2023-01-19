import { useSelector } from 'react-redux';
import GoalItems from './GoalItems';

const GoalList = () => {
	const goals = useSelector((state) => state.goal);

	return (
		<ul className="list-group">
			{goals.map((todo) => (
				<GoalItems id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default GoalList;
