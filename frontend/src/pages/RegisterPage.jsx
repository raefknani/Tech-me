import { React } from "react";
import { NavLink } from "react-router-dom";

import "../components/styling/FormV2.css";
import image from "../assets/images/backgrounds/minimalism-simple-blue-gradient-wallpaper-preview.jpg";
import Head from "../components/head.jsx";
import Footer from "../components/footer";
function Register() {
  return (
    <>
      <div className="homeLogin homeLoginV2">
        <div className="sticky">
          <Head />
        </div>
        <img className="blurredImage register" src={image} />
        <div className="outerForm outerFormV2">
          <div className="formulaire formulaireV2">
            <form className="ContentForm ContentFormV2 ">
              <h1>Register</h1>
              <div className="username">
                <input type="text" placeholder="User Name" required />
              </div>
              <div className="mail">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="pass">
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <button type="submit" className="boutonLogin boutonLoginV2">
                  SIGN IN
                </button>
              </div>
            </form>
            <div className="TextLogin">
              <p>
                or{" "}
                <span>
                  <NavLink to="/login">Log in</NavLink>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
