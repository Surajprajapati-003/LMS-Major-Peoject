import React from 'react';
import { useForm } from "react-hook-form";

const CourseRegistration = ({ setArr }) => {

  const { 
    register, 
    handleSubmit, 
    reset, 
    watch,
    formState: { errors } 
  } = useForm();

  function submit(data) {
    setArr(prev => [...prev, { id: prev.length + 1, ...data }]);
    alert("Course Registered Successfully");
    reset();
  }

  const minValue = watch("minEnrollment");

  return (
    <>
      <style>{`
        form {
          width: 320px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background: #f8f8f8;
        }
        label { display: block; margin-top: 12px; font-weight: bold; }
        input {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #aaa;
          border-radius: 4px;
        }
        .error { color: red; font-size: 13px; margin-top: 3px; }
        button {
          margin-top: 15px;
          padding: 10px;
          width: 100%;
          background: #0275d8;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover { background: #025aa5; }
      `}</style>

      <form onSubmit={handleSubmit(submit)}>

        {/* Course Name (Only letters allowed) */}
        <label>Course Name</label>
        <input 
          type="text"
          {...register("courseName", { 
            required: "Course name is required",
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: "Only alphabets allowed"
            }
          })} 
        />
        {errors.courseName && <p className="error">{errors.courseName.message}</p>}

        {/* Course ID (alphanumeric allowed) */}
        <label>Course Id</label>
        <input 
          type="text"
          {...register("courseId", { 
            required: "Course ID is required",
            pattern: {
              value: /^[A-Za-z0-9_-]+$/,
              message: "Only letters, numbers, _ or - allowed"
            }
          })} 
        />
        {errors.courseId && <p className="error">{errors.courseId.message}</p>}

        {/* Description (minimum length) */}
        <label>Description</label>
        <input 
          type="text"
          {...register("description", { 
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters"
            }
          })} 
        />
        {errors.description && <p className="error">{errors.description.message}</p>}

        {/* Course Duration (string allowed) */}
        <label>Course Duration</label>
        <input 
          type="text"
          {...register("courseDuration", { 
            required: "Course duration is required",
            pattern: {
              value: /^[A-Za-z0-9 ]+$/,
              message: "Only alphanumeric characters allowed"
            }
          })} 
        />
        {errors.courseDuration && <p className="error">{errors.courseDuration.message}</p>}

        {/* Min Enrollment (number only) */}
        <label>Min Enrollment</label>
        <input 
          type="number"
          {...register("minEnrollment", { 
            required: "Minimum enrollment is required",
            valueAsNumber: true,
            min: { value: 40, message: "Min enrollment must be at least 40" }
          })} 
        />
        {errors.minEnrollment && <p className="error">{errors.minEnrollment.message}</p>}

        {/* Max Enrollment (must be number and >= min) */}
        <label>Max Enrollment</label>
        <input 
          type="number"
          {...register("maxEnrollment", { 
            required: "Maximum enrollment is required",
            valueAsNumber: true,
            Max: { value: 120, message: "max enrollment must be less than or equal to 120" }
          })} 
        />
        {errors.maxEnrollment && <p className="error">{errors.maxEnrollment.message}</p>}

        <button type="submit">Register Course</button>
      </form>
    </>
  );
};

export default CourseRegistration;
