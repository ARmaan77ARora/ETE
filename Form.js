import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeApp() {
  const [employees, setEmployees] = useState([]);
  const [Name, setName] = useState("");
  const [Phone_Number, setPhone_Number] = useState("");

  const fetch = async () => {
    const res = await axios.get("http://localhost:5000/api/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleAdd = async () => {
    await axios.post("http://localhost:5000/api/employees", { Name, Phone_Number });
    setName("");
    setPhone_Number("");
    fetch();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/employees/${id}`);
    fetch();
  };

  return (
    <div>
      <input
        placeholder="ID"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      /><br/>
      <br/>
      <button onClick={handleAdd}>Add Employee</button>

      <h2>All Employee</h2>
      {employees.map((employee) => (
        <div key={employee._id} style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
          <h3>{employee.Name}</h3>
          <p>{employee.Phone_Number}</p>
          <button onClick={() => handleDelete(employee._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeApp;
