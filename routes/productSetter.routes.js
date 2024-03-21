import { Router } from "express";
import { createProduct, editProduct } from "../controllers/index.js";

const router = Router();

// POST /product
router.post("/", async (req, res) => {
	try {
		const data = await createProduct(req.body);
		console.log(data);
		res.status(201).json(data);
	} catch (error) {
		console.log("Error while creating product:", error.message);
		res.status(400).json(`Error: ${error.message}`);
	}
});

// PATCH /product/:id
router.patch("/:id", async (req, res) => {
	try {
		const update = req.body;
		const id = req.params.id;

		const data = await editProduct(id, update);

		res.status(201).json(data);
	} catch (error) {
		console.log("Error while creating product:", error.message);
		res.status(400).json(`Error: ${error.message}`);
	}
});

export default router;
