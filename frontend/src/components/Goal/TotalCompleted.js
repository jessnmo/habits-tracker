import { useSelector } from 'react-redux';

const TotalCompleted = () => {
	const total = useSelector((state) =>
		state.goal.filter((goal) => goal.completed === true)
	);

	return <h4>Total Completed: {total.length}</h4>;
};

export default TotalCompleted;
