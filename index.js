import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

// routes
import productGetterRoutes from "./routes/productGetterRoutes.js";
import productSetterRoutes from "./routes/productSetterRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/product", productGetterRoutes);
app.use("/product", productSetterRoutes);

async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Successfully connected to the database...");
	} catch (error) {
		console.log("Error connecting to the database:", error.message);
	}
}

connectDB();

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
