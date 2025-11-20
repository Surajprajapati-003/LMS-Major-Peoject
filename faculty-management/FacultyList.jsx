import React from "react";

function FacultyList({ facultyData, onProfile, onUpdate, onRegister }) {
  return (
    <div>
      <h2>Faculty List</h2>
      <button onClick={onRegister}>+ Add Faculty</button>

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Profile</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {facultyData.map((f) => (
            <tr key={f.facultyId}>
              <td>{f.facultyId}</td>
              <td>{f.facultyName}</td>
              <td>{f.status}</td>
              <td><button onClick={() => onProfile(f)}>View</button></td>
              <td><button onClick={() => onUpdate(f)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyList;
