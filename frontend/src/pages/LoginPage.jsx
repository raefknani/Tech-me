import React from "react";
import { NavLink } from "react-router-dom";

import "../components/styling/Form.css";
import image from "../assets/images/backgrounds/minimalism-simple-blue-gradient-wallpaper-preview.jpg";
import Head from "../components/head.jsx";
import Login from "../components/login";

function LoginPage() {
  return (
    <div>
      <div className="sticky">
        <Head />
      </div>
      <div>
        <div className="homeLogin"></div>
        <img className="blurredImage login" src={image} />
        <Login />
        <div>
          <h4>Have you an account</h4>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
