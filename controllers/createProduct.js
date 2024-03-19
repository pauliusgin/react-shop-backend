import { Product } from "../models/productModel.js";
import { createProductValidation } from "../validation/createProductValidation.js";

// POST /product
async function createProduct(props) {
	console.log(props);

	createProductValidation(props);

	const response = await Product.create(props);

	return response;
}

export { createProduct };
