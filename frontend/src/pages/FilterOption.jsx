import React, { useState } from "react";
import Head from "../components/head.jsx";
import axios from "axios";
import "../components/styling/FilterOption.css";


function handleSubmit(event) {
  event.preventDefault();

  const description = document.getElementById("description").value;

  fetch("http://localhost:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `description=${description}`,
  })
    .then((response) => response.text())
    .then((data) => console.log(data));
}

function FilterOption() {
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
