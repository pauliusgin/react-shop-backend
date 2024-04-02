import { registerUserValidation } from "../validation/registerUserValidation.js";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";

// POST /product
async function registerUser(user) {
	registerUserValidation(user);

	const userExists = await User.find();

	if (userExists?.length > 0) throw new Error("User already exists.");

	// hash password
	const hashedPassword = await bcrypt.hash(user.password, 10);

	const newUser = await User.create({
		username: user.username,
		password: hashedPassword,
	});

	return newUser;
}

export { registerUser };
