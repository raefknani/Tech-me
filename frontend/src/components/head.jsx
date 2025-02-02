import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import MenuToggle from "../components/Menue.jsx";

import "../components/styling/header.css";
import SearchComponent from "./SearchComponentForHead.jsx";

const HeadStyle = {
  backgroundColor: "white",
  display: "flex",
  color: "white",
};

function Head() {
  const [isAccountFilled, setIsAccountFilled] = useState(false);
  const [isShoppFilled, setIsShoppFilled] = useState(false);

  const toggleAccountFill = () => {
    setIsAccountFilled(!isAccountFilled);
  };

  const toggleShoppFill = () => {
    setIsShoppFilled(!isShoppFilled);
  };

  const handleSearchboxClick = () => {
    const searchbox = document.getElementsByClassName("searchbox")[0];
    searchbox.style.transform = "translateX(-180px)";
    const inputContainer = document.getElementsByClassName("InpuTing")[0];
    const inputElement = document.createElement("input");
    inputContainer.appendChild(inputElement);
    inputElement.className = "InpuT";
    inputElement.style.position = "absolute";
    inputElement.style.right = "120px";
    inputElement.style.top = "25px";
    inputElement.style.borderRadius = "10px";
    inputElement.style.padding = "5px";
    inputElement.style.border = "1px solid black";
    document.addEventListener("click", (event) => {
      const searchbox = document.getElementsByClassName("searchbox")[0];
      const inputContainer = document.getElementsByClassName("InpuTing")[0];
      const inputElement = document.getElementsByClassName("InpuT")[0];

      if (!searchbox.contains(event.target)) {
        searchbox.style.transform = "translateX(0)";
        if (inputElement instanceof Node) {
          inputContainer.removeChild(inputElement);
        }
      }
    });
  };

  return (
    <div className="HeaderUl">
      <div className="HamburgerMenue">
        <MenuToggle />
      </div>
      <div style={HeadStyle}>
        <ul className="ulll">
          <li>
            <Link to="/" className="TechME linkk">
              TechMe
            </Link>
          </li>
          <div className="center">
            <li>
              <Link to="/" activeClassName="active" className="linkk underline">
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                activeClassName="active"
                className="linkk underline"
              >
                STORE
              </Link>
            </li>
            <li>
              <Link
                to="/shipping"
                activeClassName="active"
                className="linkk underline"
              >
                SHIPPING
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <div className="linkk ">HELP</div>
                <div className="dropdown-content">
                  <div className="choise1 underline">
                    <Link to="/conditions">Terms of use</Link>
                  </div>
                  <div className="breaklinee"></div>
                  <div className="choise2 underline">
                    <Link to="/how_to_use">How to use</Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/contact"
                activeClassName="active"
                className="linkk underline"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                activeClassName="active"
                className="linkk underline"
              >
                ABOUT
              </Link>
            </li>
          </div>{" "}
          <li className="searchbox">
            <a href="#">
              <SearchComponent />
            </a>
          </li>
          <li className="account">
            <Link to="/login">
              <i
                className={
                  isAccountFilled
                    ? "bi bi-person-fill linkkV2"
                    : "bi bi-person linkkV2"
                }
                style={{ fontSize: "35px" }}
                onMouseOver={toggleAccountFill}
                onMouseOut={toggleAccountFill}
              ></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Head;
