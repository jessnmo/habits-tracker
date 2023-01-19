//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddGoal from './components/Goal/AddGoal';
//import GoalItems from './components/Goal/GoalItems';
import GoalList from './components/Goal/GoalList';
import TotalCompleted from './components/Goal/TotalCompleted';

const App = () => {
	return (
		<>
			<AddGoal />
			<GoalList />
			{/* <GoalItems /> */}
			<TotalCompleted />
		</>
	);
};

export default App;
