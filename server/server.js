import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";

dotenv.config();

const app = express();

// ✅ Middleware to parse JSON
app.use(express.json());  

// Connect to MongoDB
await connectDB();

// Routes
app.use("/api", subscriberRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));