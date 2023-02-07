import HabitList from './HabitList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

const HabitContainer = () => {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem('notes')) || []
	);

	/* const addNote = (noteText, targetValue) => {
		const newNote = {
			id: nanoid,
			text: text,
			//number: number,
		};
		const newNotes = [...notes, newNote]; //adding the new note to the end of the current note array
		setNotes(newNotes);
	}; */
	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

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
