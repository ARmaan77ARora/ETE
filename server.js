import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import EmployeeRoutes from "./routes/EmployeeRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

app.use("/api/employees", EmployeeRoutes.js);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
