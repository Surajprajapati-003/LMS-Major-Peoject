import React from 'react';

const CourseList = ({ arr }) => {
  return (
    <table 
      border="1" 
      style={{ 
        borderCollapse: "collapse", 
        width: "100%", 
        marginTop: "20px" 
      }}
    >
      <thead style={{ background: "#0275d8", color: "white" }}>
        <tr>
          <th style={{ padding: "10px" }}>ID</th>
          <th style={{ padding: "10px" }}>Course Name</th>
          <th style={{ padding: "10px" }}>Course ID</th>
          <th style={{ padding: "10px" }}>Description</th>
          <th style={{ padding: "10px" }}>Duration</th>
          <th style={{ padding: "10px" }}>Min Enrollment</th>
          <th style={{ padding: "10px" }}>Max Enrollment</th>
        </tr>
      </thead>

      <tbody>
        {arr.map((item) => (
          <tr key={item.id}>
            <td style={{ padding: "8px" }}>{item.id}</td>
            <td style={{ padding: "8px" }}>{item.courseName}</td>
            <td style={{ padding: "8px" }}>{item.courseId}</td>
            <td style={{ padding: "8px" }}>{item.description}</td>
            <td style={{ padding: "8px" }}>{item.courseDuration}</td>
            <td style={{ padding: "8px" }}>{item.minEnrollment}</td>
            <td style={{ padding: "8px" }}>{item.maxEnrollment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
