import "./course.css"
import React, { useState } from "react";
//import axios from "axios";
//import { Link } from "react-router-dom";

//import { Container } from "react-bootstrap";

function User() {
  const [coursename, setCoursename] = useState("");
  const [usermonths, setMonths] = useState("");
  const [userfees, setUserfees] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [selects, setSelects] = useState("");

  const handlecoursename = (event) => {
    const course_name = event.target.value;
    setCoursename(course_name);
  };

  const handleusermonths = (event) => {
    const user_months = event.target.value;
    setMonths(user_months);
  };

  const handleuserfees = (event) => {
    const user_fees = event.target.value;
    setUserfees(user_fees);
  };

  const handledescription = (event) => {
    const user_description = event.target.value;
    setDescription(user_description);
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      course_name: coursename,
      user_months: usermonths,
      user_fees: userfees,
      user_descrip: description, 
    };

    fetch
      .post("http://localhost:9292/courses", JSON.stringify(userdata))
      .then((result) => {
        setMessage(result.data.msg);
        console.log(result.data);
        console.log(result.data.msg);
      });
  };
  return (

    <React.Fragment>
      <div className="content">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="course"> Course Registration </h2>
            <br></br>

           {message ? (
              <div className="text-success text-white">
                {" "}
                <h5>{message} </h5>
              </div>
            ) : (
              <></>
            )}

            <form onSubmit={submitUser} className="row g-3">
              <div className="col-md-3">
                <label className="form-label"> Course Name </label>
                 <select value={selects} onchange={e=>setSelects(e.target.value)}>
                  <option></option>
                  <option>Software Engeneering</option>
                  <option>Data Analysis</option>
                  <option>Artificial Inteligence</option>
                </select>
                <input
                  type="text"
                  name="user_name"
                  className="form-control p-2"
                  onChange={(e) => handlecoursename(e)}
                />
              </div>

              <br></br>

              <div className="col-md-3">
                <label className="form-label">No of Months </label>
                 <select value={selects} onchange={e=>setSelects(e.target.value)}>
                  <option></option>
                  <option>6</option>
                  <option>12</option>
                  <option>18</option>
                </select>
                <input
                  type="text"
                  name="user_months"
                  className="form-control p-2"
                  onChange={(e) => handleusermonths(e)}
                />
              </div>

              <br></br>

              <div className="col-md-3">
                <label className="form-label"> Course Fee </label>
                <input
                  type="text"
                  name="user_fees"
                  className="form-control p-2"
                  onChange={(e) => handleuserfees(e)}
                />
              </div>

              <br></br>

<div className="col-md-3">
                <label className="form-label"> Description </label>
                <input
                  type="text"
                  name="user_fees"
                  className="form-control p-2"
                  onChange={(e) => handledescription(e)}
                />
              </div>

<br></br>
              <div className="col-md-3">
                <button type="submit" className="butn btn-primary mt-4">
                  Register
                </button>
        
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;
