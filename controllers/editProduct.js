import { Product } from "../models/productModel.js";
import { updateProductValidation } from "../validation/updateProductValidation.js";

// GET /product/:id
async function editProduct(id, update) {
	updateProductValidation(id, update);

	// find by any selected key
	// const editedProduct = await Product.updateOne({ _id: id }, { $set: update });

	// find by id
	const editedProduct = await Product.findByIdAndUpdate(id, update, {
		new: true,
	});

	return editedProduct;
}

export { editProduct };
