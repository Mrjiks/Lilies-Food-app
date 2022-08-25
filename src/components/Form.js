import React from 'react';

export const Form = function () {
	const [username, setUsername] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		alert(`You entered: ${username}`);
	}

	function handleChange(event) {
		setUsername(event.target.value.toLowerCase());
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input
					id="usernameInput"
					type="text"
					onChange={handleChange}
					value={username}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
