import React, { useState } from 'react'

const CourseDetails = ({ arr }) => {
  const [num, setNum] = useState(0);
  const [course, setCourse] = useState(null);

  function handle() {
    const found = arr.find(i => i.id === Number(num));
    setCourse(found || null);
  }

  return (
    <>
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(e.target.value)} 
      />
      <button onClick={handle}>Search</button>

      {course ? (
        <>
          <h1>{course.courseId}. {course.courseName}</h1>
          <h1>Description: {course.description}</h1>
          <h1>Course Duration: {course.courseDuration}</h1>
          <h1>Min Enrollment: {course.minEnrollment}</h1>
          <h1>Max Enrollment: {course.maxEnrollment}</h1>
        </>
      ) : (
        <h2>No Course found</h2>
      )}
    </>
  )
}

export default CourseDetails;
