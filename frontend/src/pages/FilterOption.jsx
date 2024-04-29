import React, { useState } from "react";
import Head from "../components/head.jsx";
import axios from "axios";
import "../components/styling/FilterOption.css";
import data from "../../../backend/data/laptops.json";
import handleSubmit from "./Onsubmit.js";

function FilterOption() {
  return (
    <div className="FilterHome">
      <div className="sticky">
        <Head />
      </div>
      <div className="Filter_Option_Content">
        <h3>Filter Option</h3>
        
          <textarea
            placeholder="Enter your description......."
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <div className="submitSearchFilter">
            <input type="submit" value="Search" onClick={handleSubmit} />
          </div>
      </div>
    </div>
  );
}

export default FilterOption;
