import React from "react";

function Faculty(props) {
  return (
    <div>
      <h2>Faculty Information</h2>

      <p><b>Faculty Name:</b> {props.facName}</p>
      <p><b>Subject:</b> {props.subject}</p>
      <p><b>Experience:</b> {props.experience}</p>
    </div>
  );
}

export default Faculty;
