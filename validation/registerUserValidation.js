export function registerUserValidation(props) {
	console.log(props);

	const { username, password } = props;
	const userRegex = new RegExp("^[a-zA-Z0-9]+$");

	if (username.trim().length === 0 || password.trim().length === 0) {
		throw new Error("Both username and password must be provided.");
	}

	if (5 > username.length > 15 || 5 > password.length > 15) {
		throw new Error(
			"Username and password must contain between 5 and 15 symbols."
		);
	}

	if (!userRegex.test(username) || !userRegex.test(password)) {
		throw new Error(
			"Username and password can only contain alphanumerical characters."
		);
	}
}
