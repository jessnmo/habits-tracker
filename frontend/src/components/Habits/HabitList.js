import Habits from './Habits';
import AddHabit from './AddHabit';

//component containing all the habits, all the notes with details
const HabitList = ({ notes }) => {
	return (
		<div className="HabitList">
			{notes.map((note) => (
				<Habits id={note.id} text={note.text} number={note.number} />
			))}
			<AddHabit />
		</div>
	);
};

export default HabitList;
