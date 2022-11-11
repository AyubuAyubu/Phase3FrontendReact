import React from "react";
import "./Home.css"
const Home = () => {
  return (
    <div className="headContainer">
      <div className="heading">
        <h1 className="xContact"> WELCOME TO xCONTACT SYSTEM</h1>
        <h2 className="good">We save your contact in good way.</h2>
      </div>
      <div className="input">
        <a href="/student">
          <button className="btn"> JOIN US </button>
        </a>
      </div>
    </div>
  );
};
export default Home;
