import React, { useEffect, useState } from "react";
import Head from "../components/head";
import "../components/styling/Store.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import LaptopStore from "../components/LaptopStore";
import laptops from "../../../backend/laptops.json";

function handleClick() {
  console.log("object clicked");

  // assign the style padding-left: 1000px; to the object
  var elements = document.getElementsByClassName("LaptopBox");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.paddingRight = "1100px";
    // hide the element p inside this object
    
    elements[i].getElementsByClassName("p1")[0].style.position = "relative";
    elements[i].getElementsByClassName("p2")[0].style.position = "realative";
    elements[i].getElementsByClassName("p1")[0].style.left = "600px";
    elements[i].getElementsByClassName("p1")[0].style.bottom = "100px";
    elements[i].getElementsByClassName("p2")[0].style.bottom = "100px";
  }
  return true;
}
function displyNone() {
  
    var elements = document.getElementsByClassName("LaptopBox");
  for(var i = 0; i < elements.length; i++) {
    var p1Elements = elements[i].getElementsByClassName("p1");
    for(var j = 0; j < p1Elements.length; j++) {
      p1Elements[j].style.display = "none";
    }
  }
}


const Store = () => {
  var [checkedLaptops, setCheckedLaptops] = useState([]);
  // get the url query parameter from the location URL*
  const urlParams = new URLSearchParams(location.search);
  const result = urlParams.get("result");
  useEffect(() => {
    axios
      .post("http://localhost:5000/submit", `description=${result}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        var data = response.data; // This is your actual response from the server
        const LAPTOPS = [];
        laptops.laptops.forEach((laptop) => {
          if (data.includes(laptop.id)) {
            LAPTOPS.push(laptop);
          }
        });
        setCheckedLaptops(LAPTOPS);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <div className="sticky">
        <Head />
      </div>

      <div className="smallfilter">
        <div className="filter">
          <span className="filterAll ">
            <NavLink to="/stre/All" className="FilterLink AllLink">
              All
            </NavLink>
          </span>

          <span className="filterFeatured">
            <NavLink to="/store/Featured" className="FilterLink FeaturedLink">
              Featured
            </NavLink>
          </span>
        </div>

        <div className="floatLeft HeadingTOP">
          <p className="headins">Store</p>
        </div>

        <div className="centerElemnts">
          <div className="floatLeft ">
            <ul>
              {checkedLaptops.map((laptop) => (
                <li
                  id={laptop.id}
                  className="ListedLaptops"
                  onClick={() => handleClick(laptop.id)}
                  on
                >
                  <LaptopStore
                    image={`http://localhost:5000/${laptop.image_source}`}
                    pcName={laptop.name}
                    price={`${laptop.price} TND`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footerStore">
          <p>© 2024 TechMe. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Store;
