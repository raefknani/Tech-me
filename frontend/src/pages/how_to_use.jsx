// import React from "react";
import Head from "../components/head.jsx";
import "../components/styling/how_to_use.css";
import caphome from "../assets/images/backgrounds/cap_home.png";
import capfiltre from "../assets/images/backgrounds/capfiltre.png";
import capcontact from "../assets/images/backgrounds/cap-contact.png"
import capshipping from "../assets/images/backgrounds/cap-shipping.png"
import logo from "../assets/images/logos/logo.png";
function HowToUse() {
  return (
    <div>
      <div className="sticky">
        <Head />
      </div>
      <div className="HTU">
        <p className="titre">How to use:</p>
        <div>
          <ul className="liste0">
            <li>Visit our website: <a href="https://TechMe.com/">https://TechMe.com/</a></li>
            <li>First of all, you will need to <a href="/login">log in</a> or <a href="/register">create an account</a></li>
            <li>You can navigate the home page by choosing either Shop Now which takes you to the store , or Filter Options which will take you to the page where you can describe your needs:</li>
          </ul>
          <div className="image-container">
          <img src={caphome} alt="Home1"/>
          </div>
          <ul className="liste0">
            <li>Filter part:This allows you to translate your choices and takes you back to products according to your needs:</li>
            <div className="image-container">
             <img src={capfiltre} alt="filter"/>
            </div>
            <li>You can also contact us by filling out your needs on the contact page:</li>
            <div className="image-container">
             <img src={capcontact} alt="contact"/>
            </div>
            <li>You can find everything about delivery in the shipping page:</li>
            <div className="image-container">
             <img src={capshipping} alt="shipping"/>
            </div>
            <li>If you wish to place your order online:</li>
            <p className="order">Order via Facebook: To place your order through Facebook, please send us a private message containing the following information:</p></ul>
          <ul>
          <ul className="list1" >
            <li>First and last name.</li>
            <li>Number of CIN.</li>
            <li>Phone number.</li>
            <li>E-mail.</li>
            <li>Address.</li>
            <li>Product reference(s).</li>
          </ul>
          </ul> 

          <p className="thank">"Thank you for choosing TechMe"</p>
          <img className="logo" src={logo} alt="Description de votre image" ></img>
       </div>
      </div>
    </div>
  );
}

export default HowToUse;