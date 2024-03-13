import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true, unique: true },
});

const Product = mongoose.model("Product", productSchema);

async function createProduct(props) {
	console.log(props);

	const response = await Product.create({
		title: "Orangelon",
		description: "A delicious combination of orange and melon.",
	});

	return response;
}

export { createProduct };
