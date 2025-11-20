import React, { useState } from "react";

function FacultyUpdate({ faculty, updateFaculty }) {
  const [updated, setUpdated] = useState(faculty);

  const handleChange = (e) => {
    setUpdated({ ...updated, [e.target.name]: e.target.value });
  };

  const submitUpdate = (e) => {
    e.preventDefault();
    updateFaculty(updated);
  };

  return (
    <form onSubmit={submitUpdate}>
      <h2>Update Faculty</h2>

      <input name="facultyName" onChange={handleChange} defaultValue={faculty.facultyName} />
      <input name="age" type="number" onChange={handleChange} defaultValue={faculty.age} />
      <input name="qualification" onChange={handleChange} defaultValue={faculty.qualification} />
      <input name="joinedAt" type="date" onChange={handleChange} defaultValue={faculty.joinedAt} />
      
      <select name="status" onChange={handleChange} defaultValue={faculty.status}>
        <option value="active">Active</option>
        <option value="left">Left</option>
      </select>

      <button type="submit">Update</button>
    </form>
  );
}

export default FacultyUpdate;
