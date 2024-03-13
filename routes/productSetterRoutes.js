import { Router } from "express";
import { createProduct, editProduct } from "../controllers/index.js";

const router = Router();

// POST /product
router.post("/", async (req, res) => {
	try {
		const data = await createProduct(req.body);
		res.json(data);
	} catch (error) {
		console.log("Error while creating product:", error.message);
		res.status(400).json(`Error: ${error.message}`);
	}
});

// POST /product/:id
router.patch("/:id", (req, res) => {
	const data = editProduct();
	res.send(data);
});

export default router;
