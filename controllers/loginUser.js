import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

export async function loginUser(user) {
	const { username, password } = user;

	if (!username || !password) {
		throw new Error("Username and password are required.");
	}

	const findUser = await User.findOne({ username });

	if (!findUser) throw new Error("Username or password is incorrect.");

	const match = await bcrypt.compare(password, findUser.password);

	if (!match) throw new Error("Username or password is incorrect.");

	// create token // {username: username} = {username}
	const token = jwt.sign({ username }, process.env.JWT_SECRET, {
		expiresIn: "15m",
	});

	return { token };
}
