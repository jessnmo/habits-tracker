//Display on the left side of the screen 30% as the nav
//https://www.figma.com/file/MYivArcWfNwov2mdmGxAsy/Habit-Tracker?node-id=6%3A25&t=Blu7i85xHETQATVZ-0 Refer design

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from './goalSlice';

const AddGoal = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addGoal({
				title: value,
			})
		);
	};

	return (
		<form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
			<label className="sr-only">Name</label>
			<input
				type="text"
				className="form-control mb-2 mr-sm-2"
				placeholder="Add todo..."
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type="submit" className="btn btn-primary mb-2">
				Submit
			</button>
		</form>
	);
};

export default AddGoal;
