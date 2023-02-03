import HabitList from './HabitList';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const HabitContainer = () => {
	const [notes, setNotes] = useState([
		{
			text: 'hit the gym',
			number: 5,
			id: nanoid,
		},
		{
			text: 'note2',
			number: 1,
			id: nanoid,
		},
		{
			text: 'note3',
			number: 2,
			id: nanoid,
		},
		{
			text: 'test new note',
			number: 7,
			id: nanoid,
		},
	]);

	const addNote = (text) => {
		console.log(text); //accepting the text user typed
		const newNote = {
			id: nanoid,
			text: text,
			//number: number,
		};
		const newNotes = [...notes, newNote]; //adding the new note to the end of the current note array
		setNotes(newNotes);
	};

	return (
		<>
			<HabitList notes={notes} handleAddNote={addNote} />
		</>
	);
};

export default HabitContainer;
