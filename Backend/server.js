import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/jobs", jobRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
