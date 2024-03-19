import { Product } from "../models/productModel.js";

// GET /product/:id
async function editProduct(id, update) {
	const editedProduct = await Product.updateOne({ _id: id }, { $set: update });

	return editedProduct;
}

export { editProduct };
