import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers/index.js";

const router = Router();

// GET /product
router.get("/", (_, res) => {
	const data = getAllProducts();
	res.json(data);
});

// GET /product/:id
router.get("/:id", (_, res) => {
	const data = getProductById();
	res.send(data);
});

export default router;
