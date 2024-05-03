// import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min.js";
import Head from "../components/head.jsx";
import "../components/styling/how_to_use.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
function HowToUse() {
  return (
    <div>
     <div className="sticky">
                <Head />
            </div>
      <div className="HTU">
        <p>How to use:</p>
        <p> our website: <a href="https://TechMe.com/">https://TechMe.com/</a></p>
        <p>To place an order online:</p>
        <p>First of all, you will need to <Link to="/login"> log in</Link>or <a href="frontend/src/pages/RegisterPage.jsx">create an account</a></p>
        <p></p>
      </div>
    </div>
  );
}

export default HowToUse;