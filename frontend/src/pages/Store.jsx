import React, { useEffect, useState } from "react";
import Head from "../components/head";
import "../components/styling/Store.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import LaptopStore from "../components/LaptopStore";
import laptops from "../../../backend/laptops.json";

import lap1 from "../assets/images/laptop_images/laptop1.png";
import lap2 from "../assets/images/laptop_images/laptop2.png";
import lap3 from "../assets/images/laptop_images/laptop3.png";
import lap5 from "../assets/images/laptop_images/laptop5.png";
import lap4 from "../assets/images/laptop_images/ddd.png";
import lap6 from "../assets/images/laptop_images/sss.png";
import lap7 from "../assets/images/laptop_images/xxx.png";
import lap8 from "../assets/images/laptop_images/lap8.png";

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

        // document.querySelectorAll(".floatLeft ul li").forEach((li) => {
        //   if (data.includes(li.id)) {
        //     li.style.display = "block";
        //   } else {
        //     li.style.display = "none";
        //   }
        // });
        // read the laptops.json file and filter the ids that we got
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
          <div className="floatLeft">
            <ul>
              {/* <li id="_1">
                <LaptopStore
                  image={lap1}
                  pcName="PC PORTABLE MSI PRESTIGE 15 I7 12È GÉN 8GO GTX 1650"
                  price="TND 4569,00"
                />
              </li>
              <li id="_2">
                <LaptopStore
                  image={lap2}
                  pcName="PC PORTABLE ASUS TUF GAMING A15 AMD RYZEN 9 8GO RTX 4070"
                  price="TND 5119,00"
                />
              </li>
              <li id="_3">
                <LaptopStore
                  image={lap3}
                  pcName="PC Portable Gamer LENOVO LOQ 15APH8 AMD RYZEN 7 32Go RTX 3050"
                  price="TND 3259,00"
                />
              </li>
               */}
              {checkedLaptops.map((laptop) => (
                <li id={laptop.id}>
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
