import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
	const [name, setName] = useState("");

	function handleChange(event) {
		setName(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault();
		onBandSubmit(name);
		setName("");
	}

  return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Name
						<input
							type="text"
							value={name}
							name="name"
							onChange={handleChange}/>
					</label>
				</div>
				<button type="submit">Add Band</button>
			</form>
		</div>
	)
}

export default BandInput;
