import Employee from "../models/EmployeeSchema.js";

export const getEmployees = async (req, res) => {
  try {
    const Employees = await Employee.find();
    res.json(Employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  const { title, content } = req.body;
  const Employee = new Employee({ title, content });

  try {
    const savedEmployee = await Employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
