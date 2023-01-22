import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGoalsAsync = createAsyncThunk(
	'goals/getGoalsAsync',
	async () => {
		const response = await fetch('http://localhost:8080/goals');
		//if response returns with status OK, we want to convert response to json()
		if (response.ok) {
			const goals = await response.json(); //take the array, turn it to json and assign it to goals variable
			return { goals }; // whatever it returns an object that contains the goals. whatever it returns will be the payload of the action
		}
	}
);

export const addGoalAsync = createAsyncThunk(
	'goals/addGoalAsync',
	async (payload) => {
		const response = await fetch('http://localhost:8080/goals', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ title: payload.title }),
		});
		if (response.ok) {
			const goal = await response.json();
			return { goal };
		}
	}
);

export const toggleCompleteAsync = createAsyncThunk(
	'goals/toggleCompleteAsync',
	async (payload) => {
		const response = await fetch(`http://localhost:8080/goals/${payload.id}`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ completed: payload.completed }), //the completed value we get from payload
		});
		if (response.ok) {
			const goal = await response.json();
			return { id: goal.id, completed: goal.completed };
		}
	}
);

const goalSlice = createSlice({
	name: 'goals',
	initialState: [
		{
			id: 0,
			title: 'goal',
			completed: false,
		},
		{
			id: 1,
			title: 'goal1',
			completed: false,
		},
		{
			id: 2,
			title: 'goal2',
			completed: false,
		},
		{
			id: 3,
			title: 'goal3',
			completed: false,
		},
	],
	reducers: {
		addGoals: (state, action) => {
			const newGoal = {
				id: Date.now(),
				title: action.payload.title,
				completed: false,
			};
			state.push(newGoal);
		},

		toggleComplete: (state, action) => {
			console.log('toggleComplete', action.payload);
			const index = state.findIndex((goal) => goal.id === action.payload.id);
			if (index !== -1) {
				const newState = [...state];
				newState[index] = {
					...newState[index],
					completed: action.payload.completed,
				};
				return newState;
			}
			return state;
		},
		deleteGoal: (state, action) => {
			return state.filter((goal) => goal.id !== action.payload.id);
		},
	},
	extraReducers: {
		[getGoalsAsync.pending]: (state, action) => {
			console.log('loading');
		},
		[getGoalsAsync.fulfilled]: (state, action) => {
			console.log('fetch succeed');
			return action.payload.goals; //at this point the state that's depending on this action gets updated. Hence, in GoalList the goals that we take from the state using useSelector will also update
		},
		[addGoalAsync.fulfilled]: (state, action) => {
			state.push(action.payload.goal); // take the goal from payload and push it to the state
		},
		[toggleCompleteAsync.fulfilled]: (state, action) => {
			const index = state.findIndex((goal) => goal.id === action.payload.id);
			if (index !== -1) {
				const newState = [...state];
				newState[index] = {
					...newState[index],
					completed: action.payload.completed,
				};
				return newState;
			}
			return state;
		},
	},
});

export const { addGoals, toggleComplete, deleteGoal } = goalSlice.actions;
export default goalSlice.reducer;
