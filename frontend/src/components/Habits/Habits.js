//Component containing habit items, the strip you see
import { RiDeleteBin3Line } from 'react-icons/ri';

const Habits = ({ id, text, number, handleDeleteNote }) => {
	return (
		<div className="stickerContainer">
			<div className="frequency">
				<p>{text}</p>
				<p>Targeted Frequency: </p> <p>{number} times/week</p>
				{/* This is dynamic based on the input from the header */}
			</div>

			{/* Container for weekday and checkbox view */}
			<div className="weeklyContainer">
				{/* weekday + checkbox, display flex column */}

				<div className="dailyCheckIn">
					<label for="monday">M</label>
					<input type="checkbox" id="monday" name="monday" />
				</div>
				<div className="dailyCheckIn">
					<label for="tuesday">T</label>
					<input type="checkbox" id="tuesday" name="tuesday" />
				</div>
				<div className="dailyCheckIn">
					<label for="wednesday">W</label>
					<input type="checkbox" id="wednesday" name="wednesday" />
				</div>
				<div className="dailyCheckIn">
					<label for="thursday">T</label>
					<input type="checkbox" id="thursday" name="thursday" />
				</div>
				<div className="dailyCheckIn">
					<label for="Friday">F</label>
					<input type="checkbox" id="Friday" name="Friday" />
				</div>
				<div className="dailyCheckIn">
					<label for="Saturday">S</label>
					<input type="checkbox" id="Saturday" name="Saturday" />
				</div>
				<div className="dailyCheckIn">
					<label for="Sunday">S</label>
					<input type="checkbox" id="Sunday" name="Sunday" />
				</div>
			</div>
			<div className="progress">
				<div className="progressHeader">
					<p>Progress</p>
				</div>

				<div className="progressDetail">
					<p> /7</p>
					<RiDeleteBin3Line onClick={() => handleDeleteNote(id)} />
				</div>
			</div>
		</div>
	);
};

export default Habits;
