//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddGoal from './components/Goal/AddGoal';
import GoalList from './components/Goal/GoalList';
import TotalCompleted from './components/Goal/TotalCompleted';

const App = () => {
	return (
		<>
			<AddGoal />
			<GoalList />
			<TotalCompleted />
		</>
	);
};

export default App;
