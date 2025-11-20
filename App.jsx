import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import CourseRegistration from './course-management/CourseRegistration';
// import CourseList from './course-management/CourseList';
// import CourseDetails from './course-management/CourseDetails';
// import DeleteCourse from './course-management/DeleteCourse';
// import FacultyManagement from './course-management/FacultyManagement';
import FacultyRegistration from "./faculty-management/FacultyRegistration";
import FacultyList from "./faculty-management/FacultyList";
import FacultyProfile from "./faculty-management/FacultyProfile";
import FacultyUpdate from "./faculty-management/FacultyUpdate";
import FacultyNavbar from './faculty-management/FacultyNavbar';
// const App = () => {
//   const [arr, setArr] = useState([]);
function App() {
  const [facultyData, setFacultyData] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [view, setView] = useState("list");

  const addFaculty = (faculty) => {
    setFacultyData([...facultyData, faculty]);
    setView("list");
  };

  const updateFaculty = (updatedFaculty) => {
    const updatedList = facultyData.map((item) =>
      item.facultyId === updatedFaculty.facultyId ? updatedFaculty : item
    );
    setFacultyData(updatedList);
    setView("list");
  };
  return (
  <div style={{ padding: "20px" }}>
    <h1>Faculty Management System</h1>

    <FacultyNavbar setView={setView} />

    {view === "register" && <FacultyRegistration addFaculty={addFaculty} />}

    {view === "list" && (
      <FacultyList
        facultyData={facultyData}
        onProfile={(f) => { setSelectedFaculty(f); setView("profile"); }}
        onUpdate={(f) => { setSelectedFaculty(f); setView("update"); }}
        onRegister={() => setView("register")}
      />
    )}

    {view === "profile" && (
      <FacultyProfile faculty={selectedFaculty} goBack={() => setView("list")} />
    )}

    {view === "update" && (
      <FacultyUpdate faculty={selectedFaculty} updateFaculty={updateFaculty} />
    )}
  </div>
);
}
//     <BrowserRouter>
//       <nav
//   style={{
//     display: "flex",
//     gap: "15px",
//     marginBottom: "25px",
//     padding: "12px 20px",
//     background: "#0275d8",
//     borderRadius: "8px",
//   }}
// >
//   <Link
//     to="/"
//     style={{
//       color: "white",
//       textDecoration: "none",
//       fontWeight: "bold",
//       padding: "8px 14px",
//       borderRadius: "6px",
//       transition: "0.2s",
//     }}
//     onMouseOver={(e) => (e.target.style.background = "#025aa5")}
//     onMouseOut={(e) => (e.target.style.background = "transparent")}
//   >
//     Register Course
//   </Link>

//   <Link
//     to="/list"
//     style={{
//       color: "white",
//       textDecoration: "none",
//       fontWeight: "bold",
//       padding: "8px 14px",
//       borderRadius: "6px",
//       transition: "0.2s",
//     }}
//     onMouseOver={(e) => (e.target.style.background = "#025aa5")}
//     onMouseOut={(e) => (e.target.style.background = "transparent")}
//   >
//     Course List
//   </Link>

//   <Link
//     to="/details"
//     style={{
//       color: "white",
//       textDecoration: "none",
//       fontWeight: "bold",
//       padding: "8px 14px",
//       borderRadius: "6px",
//       transition: "0.2s",
//     }}
//     onMouseOver={(e) => (e.target.style.background = "#025aa5")}
//     onMouseOut={(e) => (e.target.style.background = "transparent")}
//   >
//     Course Details
//   </Link>

//   <Link
//     to="/delete"
//     style={{
//       color: "white",
//       textDecoration: "none",
//       fontWeight: "bold",
//       padding: "8px 14px",
//       borderRadius: "6px",
//       transition: "0.2s",
//     }}
//     onMouseOver={(e) => (e.target.style.background = "#025aa5")}
//     onMouseOut={(e) => (e.target.style.background = "transparent")}
//   >
//     Delete Course
//   </Link>

//   <Link
//     to="/manage"
//     style={{
//       color: "white",
//       textDecoration: "none",
//       fontWeight: "bold",
//       padding: "8px 14px",
//       borderRadius: "6px",
//       transition: "0.2s",
//     }}
//     onMouseOver={(e) => (e.target.style.background = "#025aa5")}
//     onMouseOut={(e) => (e.target.style.background = "transparent")}
//   >
//     Faculty Management
//   </Link>

  
// </nav>


//       <Routes>
//         <Route 
//           path="/" 
//           element={<CourseRegistration setArr={setArr} />} 
//         />
//         <Route 
//           path="/list" 
//           element={<CourseList arr={arr} />} 
//         />
//         <Route 
//           path="/details" 
//           element={<CourseDetails arr={arr} />} 
//         />
//         <Route 
//           path="/delete" 
//           element={<DeleteCourse setArr={setArr} arr={arr} />} 
//         />
//         <Route 
//           path="/manage" 
//           element={<FacultyManagement setArr={setArr} arr={arr} />} 
//         />
        
        
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default App;
