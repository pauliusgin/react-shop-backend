import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

// routes
import productGetterRoutes from "./routes/productGetter.routes.js";
import productSetterRoutes from "./routes/productSetter.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/product", productGetterRoutes);
app.use("/product", productSetterRoutes);

app.get("/", (_, res) => res.send("Express on Vercel"));

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
