import HabitList from './HabitList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const HabitContainer = () => {
	const [notes, setNotes] = useState([
		{
			text: 'hit the gym',
			number: 5,
			id: nanoid(),
		},
		{
			text: 'note2',
			number: 1,
			id: nanoid(),
		},
		{
			text: 'note3',
			number: 2,
			id: nanoid(),
		},
		{
			text: 'test new note',
			number: 7,
			id: nanoid(),
		},
	]);

	/* const addNote = (noteText, targetValue) => {
		const newNote = {
			id: nanoid,
			text: text,
			//number: number,
		};
		const newNotes = [...notes, newNote]; //adding the new note to the end of the current note array
		setNotes(newNotes);
	}; */

	const handleAddNote = (noteText, targetValue) => {
		setNotes([...notes, { id: nanoid, text: noteText, number: targetValue }]);
	};

	//this function will return a new array with notes that doesn't have the same ID that was targeted 沒有點到名字的留下
	const deleteNote = (id) => {
		setNotes((notes) => {
			console.log(notes);
			const notDeletedNotes = notes.filter((note) => note.id !== id);
			console.log(notDeletedNotes);
			return notDeletedNotes;
		});
	};

	return (
		<>
			<HabitList
				notes={notes}
				handleAddNote={handleAddNote}
				handleDeleteNote={deleteNote}
			/>
		</>
	);
};

export default HabitContainer;
