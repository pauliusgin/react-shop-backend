import { Product } from "../models/productModel.js";

// GET /product/:id
async function getProductById(id) {
	const product = await Product.findById(id);
	return product;
}

export { getProductById };
