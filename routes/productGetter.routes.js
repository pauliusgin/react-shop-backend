import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers/index.js";

const router = Router();

// GET /product
router.get("/", async (_, res) => {
	try {
		const data = await getAllProducts();
		res.status(200).json(data);
	} catch (error) {
		console.log("Error while retrieving products:", error.message);
		res.status(400).json(`Error: ${error.message}`);
	}
});

// GET /product/:id
router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const data = await getProductById(id);
		res.send(data);
	} catch (error) {
		console.log("Error while retrieving product by ID:", error.message);
		res.status(400).json(error.message);
	}
});

export default router;
