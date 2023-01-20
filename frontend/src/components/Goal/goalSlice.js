import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api =
	'https://project-happy-thoughts-api-fg6vuzfhaa-ez.a.run.app/thoughts';

export const getGoalsAsync = createAsyncThunk(
	'goal/getGoalsAsync',
	async () => {
		const response = await fetch(api);
		if (response.ok) {
			const goals = await response.json();
			return { goals }; //once returned will dispatch an action, goals will be in the payload
		}
	}
);

export const addGoalAsync = createAsyncThunk(
	'goal/addGoalAsync',
	async (payload) => {
		const response = await fetch(api, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: payload.title }),
		});
		if (response.ok) {
			const goal = await response.json();
			return { goal };
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
			completed: false,
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
			const index = state.findIndex((goal) => goal.id === action.payload.id); //finding the index of the goals in the array base on the id
			//if (index > -1) {
			state[index].completed = action.payload.completed;
			//}
			//return [...state];
		},

		deleteGoal: (state, action) => {
			return state.filter((goal) => goal.id !== action.payload.id); //only the goal that doesn't have the same id as the clicked ones will be returned, otherwise they're select to remove
		},
	},
	extraReducers: {
		[getGoalsAsync.pending]: (state, action) => {
			console.log('fetching');
		},
		[getGoalsAsync.fulfilled]: (state, action) => {
			console.log('fetching succeed');
			return action.payload.goal;
		},
	},
});

export const { addGoal, toggleComplete, deleteGoal } = goalSlice.actions;
export default goalSlice.reducer;
