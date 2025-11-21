import React, { useState } from "react";

function StudentForm() {
  // Separate state variables
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [standard, setStandard] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Form</h2>

      <div>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />

      <div>
        <label>Age: </label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <br />

      <div>
        <label>Standard: </label>
        <input
          type="text"
          onChange={(e) => setStandard(e.target.value)}
        />
      </div>
      <br />

      <h3>Entered Data:</h3>
      <p><b>Name:</b> {name}</p>
      <p><b>Age:</b> {age}</p>
      <p><b>Standard:</b> {standard}</p>
    </div>
  );
}

export default StudentForm;
