//Display on the left side of the screen 30% as the nav
//https://www.figma.com/file/MYivArcWfNwov2mdmGxAsy/Habit-Tracker?node-id=6%3A25&t=Blu7i85xHETQATVZ-0 Refer design

import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { addGoals } from './goalSlice';
import { addGoalAsync } from './goalSlice';

const AddGoal = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const handleFormSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addGoalAsync({
				title: value,
			})
		);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label>What to complete next?</label>
			<input
				type="text"
				placeholder="Add goal..."
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type="submit">Submit</button>
		</form>
	);
};

export default AddGoal;
