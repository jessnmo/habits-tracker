//Component containing habit items, the strip you see
import { RiDeleteBin3Line } from 'react-icons/ri';
import { useState } from 'react';

const Habits = ({ id, text, number, handleDeleteNote }) => {
	const [selected, setSelected] = useState([]);
	const handleCheckboxChange = (event) => {
		const name = event.target.name;
		if (selected.includes(name)) {
			setSelected(selected.filter((item) => item !== name));
		} else {
			setSelected([...selected, name]);
		}
	};

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
					<input
						type="checkbox"
						id="monday"
						name="monday"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="dailyCheckIn">
					<label for="tuesday">T</label>
					<input
						type="checkbox"
						id="tuesday"
						name="tuesday"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="dailyCheckIn">
					<label for="wednesday">W</label>
					<input
						type="checkbox"
						id="wednesday"
						name="wednesday"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="dailyCheckIn">
					<label for="thursday">T</label>
					<input
						type="checkbox"
						id="thursday"
						name="thursday"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="dailyCheckIn">
					<label for="Friday">F</label>
					<input
						type="checkbox"
						id="Friday"
						name="Friday"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="dailyCheckIn">
					<label for="Saturday">S</label>
					<input
						type="checkbox"
						id="Saturday"
						name="Saturday"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="dailyCheckIn">
					<label for="Sunday">S</label>
					<input
						type="checkbox"
						id="Sunday"
						name="Sunday"
						onChange={handleCheckboxChange}
					/>
				</div>
			</div>
			<div className="progress">
				<div className="progressHeader">
					<p>Progress</p>
				</div>

				<div className="progressDetail">
					<p> {selected.length}/7</p>
					<RiDeleteBin3Line onClick={() => handleDeleteNote(id)} />
				</div>
			</div>
		</div>
	);
};

export default Habits;
