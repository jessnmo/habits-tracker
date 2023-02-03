import Habits from './Habits';
import AddHabit from './AddHabit';

//component containing all the habits, all the notes with details
const HabitList = ({ notes, handleAddNote }) => {
	return (
		<div className="HabitList">
			{notes.map((note) => (
				<Habits id={note.id} text={note.text} number={note.number} />
			))}
			<AddHabit handleAddNote={handleAddNote} />{' '}
			{/* pass it as a prop so making sure AddHabit has access to the function addNote */}
		</div>
	);
};

export default HabitList;
