import { useSelector } from 'react-redux';

const TotalCompleted = () => {
	const total = useSelector(
		(state) => state.goals.filter((goal) => goal.completed === true) //specify goal
	); // give back everything that is true in completed

	return <h4>Total Completed: {total.length}</h4>;
};

export default TotalCompleted;
