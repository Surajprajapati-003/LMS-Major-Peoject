import React, { useState } from 'react';

const DeleteCourse = ({ setArr, arr }) => {
  const [num, setNum] = useState("");
  function handle() {
  let newArr = [...arr];  // make a copy (React safe)

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].courseId == num) {
      newArr.splice(i, 1); // remove element by index
      alert(`Course Deleted with id: ${num}`);
      break;
    }
  }

  setArr(newArr);
  setNum("");
}


  return (
    <>
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(e.target.value)} 
      />
      <button onClick={handle}>Delete</button>
    </>
  );
};

export default DeleteCourse;
