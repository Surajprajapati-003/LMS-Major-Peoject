import React from "react";

function DisplayData(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Entered Data</h2>

      <p><b>Name:</b> {props.name}</p>
      <p><b>Age:</b> {props.age}</p>
      <p><b>Email:</b> {props.email}</p>
      <p><b>City:</b> {props.city}</p>
      <p><b>Course:</b> {props.course}</p>
    </div>
  );
}

export default DisplayData;
