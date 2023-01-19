import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGoalsAsync = createAsyncThunk(
	'goal/getGoalsAsync',
	async () => {
		const response = await fetch(
			'https://project-happy-thoughts-api-fg6vuzfhaa-ez.a.run.app/thoughts'
		);
		if (response.success.true) {
			const goal = await response.json();
			return { goal }; //once returned will dispatch an action, goals will be in the payload
		}
	}
);

const goalSlice = createSlice({
	name: 'goal',
	initialState: [
		{
			id: 0,
			title: 'todo',
			completed: false,
		},
		{
			id: 1,
			title: 'todo1',
			completed: false,
		},
		{
			id: 2,
			title: 'todo2',
			completed: false,
		},
		{
			id: 3,
			title: 'todo3',
			completed: true,
		},
	],
	reducers: {
		addGoal: (state, action) => {
			const newGoal = {
				id: Date.now(),
				title: action.payload.title,
				completed: false,
			};
			state.push(newGoal);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((goal) => goal.id === action.payload.id); //find the index of goal based on id
			state[index].completed = action.payload.completed;
		},
		deleteGoal: (state, action) => {
			return state.filter((goal) => goal.id !== action.payload.id);
		},
	},
	extraReducers: {
		[getGoalsAsync.fulfilled]: (state, action) => {
			return action.payload.goal;
		},
	},
});

export const { addGoal, toggleComplete, deleteGoal } = goalSlice.actions;
export default goalSlice.reducer;
