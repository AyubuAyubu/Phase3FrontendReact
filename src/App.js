import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home/Home";
import Student from "./pages/Student";
import Course from "./pages/course/Course";



const App = () => {
  const [students,setStudents]=useState([])
  useEffect(()=>{
    fetch('http://localhost:9292/students')
    .then(res=>res.json())
    .then(data=>setStudents(data))
    .catch(console.error)
  })
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard students={students}/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/course" element={<Course />} />
          <Route path="/edit" element={<EditStudentRecord />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;


