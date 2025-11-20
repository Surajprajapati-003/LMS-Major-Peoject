import React, { useState } from "react";

function FacultyRegistration({ addFaculty }) {
  const [faculty, setFaculty] = useState({
    facultyId: "",
    facultyName: "",
    age: "",
    qualification: "",
    joinedAt: "",
    status: "active"
  });

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addFaculty(faculty);
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Faculty Registration</h2>

      <label htmlFor="fId">Faculty ID:</label>
      <input name="facultyId" onChange={handleChange} placeholder="Faculty ID" required />
      <br /><br>
    </br>
      <label htmlFor="fName">Faculty Name:</label>
      <input name="facultyName" onChange={handleChange} placeholder="Name" required />
      <br />
      <br></br>
      <label htmlFor="fAge">Faculty Age:</label>
      <input name="age" type="number" onChange={handleChange} placeholder="Age" required />
      <br />
      <br></br>
      <label htmlFor="fQual">Faculty Qualification:</label>
      <input name="qualification" onChange={handleChange} placeholder="Qualification" required />
      <br />
      <br></br>
      <label htmlFor="fDate">Joining Date:</label>
      <input name="joinedAt" type="date" onChange={handleChange} required />
      <br />
      <br></br>
      
      <select name="status" onChange={handleChange}>
        <option value="active">Active</option>
        <option value="left">Left</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default FacultyRegistration;
