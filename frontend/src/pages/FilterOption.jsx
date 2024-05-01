import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Head from "../components/head.jsx";
import axios from "axios";
import "../components/styling/FilterOption.css";


import { useHistory } from "react-router-dom";

function FilterOption() {
  const location = useLocation();
  const result = location.state ? location.state.result : null;

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const description = document.getElementById("description").value;
  
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `description=${description}`,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const firstResult = data[0];
        history.push({
          pathname: "/store",
          state: { result: firstResult },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  

  return (
    <div className="FilterHome">
      <div className="sticky">
        <Head />
      </div>
      <div className="Filter_Option_Content">
        <h3>Filter Option</h3>

        <form>
          <textarea
            placeholder="Enter your description......."
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>

          <div className="submitSearchFilter"></div>
          <button onClick={handleSubmit}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default FilterOption;
