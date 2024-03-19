import { Product } from "../models/productModel.js";

// GET /product
async function getAllProducts() {
	const products = await Product.find({});
	return products;
}

export { getAllProducts };
