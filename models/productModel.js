import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	_id: { type: mongoose.ObjectId },
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	taste: { type: String },
});

const Product = mongoose.model("Product", productSchema);

export { Product };
