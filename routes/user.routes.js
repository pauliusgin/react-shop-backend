import { Router } from "express";
import { registerUser, loginUser } from "../controllers/index.js";

const router = Router();

// POST /user
router.post("/", async (req, res) => {
	try {
		const userData = await registerUser(req.body);
		res.status(201).json(userData);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

// POST /user/login
router.post("/login", async (req, res) => {
	try {
		const userData = await loginUser(req.body);
		res.status(201).json(userData);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

export default router;
