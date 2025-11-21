import React from "react";
import Faculty from "./Faculty";

function App() {
  const facultyName = "Ramesh";
  const subject = "Java";
  const experience = "13 years";

  return (
    <div>
      <h1>Faculty Details</h1>

      {/* Passing data as props */}
      <Faculty 
        facName={facultyName}
        subject={subject}
        experience={experience}
      />
    </div>
  );
}

export default App;
