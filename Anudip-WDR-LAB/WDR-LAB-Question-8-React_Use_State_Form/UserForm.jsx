import React, { useState } from "react";
import DisplayData from "./DisplayData";

function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>

      <input
        type="number"
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      /><br/><br/>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>

      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      /><br/><br/>

      <input
        type="text"
        placeholder="Enter Course"
        onChange={(e) => setCourse(e.target.value)}
      /><br/><br/>

      <DisplayData 
        name={name}
        age={age}
        email={email}
        city={city}
        course={course}
      />
    </div>
  );
}

export default UserForm;
