import { Types } from "mongoose";

function updateProductValidation(id, update) {
	if (!update || Object.keys(update).length === 0) {
		throw new Error("Update is not provided.");
	}

	if (!Types.ObjectId.isValid(id)) {
		throw new Error("This is not a valid ID.");
	}
}

export { updateProductValidation };
