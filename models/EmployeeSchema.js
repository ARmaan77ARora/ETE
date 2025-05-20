import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  department: { type: String, required: true },
});

export default mongoose.model("Employee", EmployeeSchema);