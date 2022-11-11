import React, { useState } from "react";
import "../course/course.css"
const Course = () => {
  const [formdata, setFormData] = useState({
    name: "",
    month: "",
    technology: "",
    fees: "",
    description: "",
    study_type:""
  });
  function handleChange(e) {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    // console.log(JSON.stringify(formdata))
    fetch("http://localhost:9292/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Application: "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  }
  return (
    <div className="studentbackground">
      <div className="form">
        <h2>Register new Course</h2>
        <div className="container">
          <form id="student-form" onSubmit={handleSubmit}>
            <label for="name">Course name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formdata.name}
              onChange={handleChange}
            />

            <label for="name">Month</label>
            <input
              type="number"
              id="month"
              name="month"
              value={formdata.month}
              onChange={handleChange}
            />

            <label for="name">Technology</label>
            <input
              type="text"
              id="technology"
              name="technology"
              value={formdata.technology}
              onChange={handleChange}
            />

            <label for="name">Course Fees</label>
            <input
              type="number"
              id="fees"
              name="fees"
              value={formdata.fees}
              onChange={handleChange}
            />

            <label for="name">Course Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formdata.description}
              onChange={handleChange}
            />
            <label for="name">Study type</label>
            <input
              type="text"
              id="study_type"
              name="study_type"
              value={formdata.study_type}
              onChange={handleChange}
            />
            <button id="btn" type="submit">
              Register Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Course;
