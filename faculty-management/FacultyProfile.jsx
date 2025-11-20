import React from "react";

function FacultyProfile({ faculty, goBack }) {
  return (
    <div>
      <h2>Faculty Profile</h2>

      <p><b>ID:</b> {faculty.facultyId}</p>
      <p><b>Name:</b> {faculty.facultyName}</p>
      <p><b>Age:</b> {faculty.age}</p>
      <p><b>Qualification:</b> {faculty.qualification}</p>
      <p><b>Joined At:</b> {faculty.joinedAt}</p>
      <p><b>Status:</b> {faculty.status}</p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default FacultyProfile;
