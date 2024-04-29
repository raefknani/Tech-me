import React from "react";
import { NavLink, Link } from "react-router-dom"; // Importation de NavLink et Link à partir de react-router-dom
import Head from "../components/head.jsx";
import "../components/styling/help.css";

function Help() {
  return (
    <div>
      <div className="helpV2">
        <div className="sticky">
          <Head />
        </div>

        <div className="containerV2">
          <div class="fdfd">
            <div className="boxV2">
              <NavLink
                to="/conditions"
                id="conditions_of_use"
                className="no-underline"
              >
                <p className="ka">Terms of use</p>
              </NavLink>
            </div>
          </div>
          <div className="howt">
            <div className="boxV2">
              <NavLink
                to="/how_to_use"
                id="how_to_use"
                className="no-underline"
              >
                <p className="ki">How to use</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
