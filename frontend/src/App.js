//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddGoal from './components/Goal/AddGoal';
import GoalList from './components/Goal/GoalList';
import TotalCompleted from './components/Goal/TotalCompleted';
import HabitContainer from './components/Habits/HabitContainer';
//import HabitHeader from './components/Habits/HabitHeader';

const App = () => {
	return (
		<>
			<AddGoal />
			<GoalList />
			<TotalCompleted />
			{/* <HabitHeader /> */}
			<HabitContainer />
		</>
	);
};

export default App;
