import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Customer from "./pages/Customer";
import Dog from "./pages/Dog";
import DogList from "./pages/DogList";
import Review from "./pages/Review";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/review" element={<Review />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/dogList" element={<DogList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
