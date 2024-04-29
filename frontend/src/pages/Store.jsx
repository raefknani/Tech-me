import React from "react";
import Head from "../components/head.jsx";
import "../components/styling/Store.css";
import { NavLink } from "react-router-dom";

import LaptopStore from "../components/LaptopStore.jsx";

import lap1 from "../assets/images/laptop_images/laptop1.png";
import lap2 from "../assets/images/laptop_images/laptop2.png";
import lap3 from "../assets/images/laptop_images/laptop3.png";
import lap5 from "../assets/images/laptop_images/laptop5.png";
import lap4 from "../assets/images/laptop_images/ddd.png";
import lap6 from "../assets/images/laptop_images/sss.png";
import lap7 from "../assets/images/laptop_images/xxx.png";
import lap8 from "../assets/images/laptop_images/lap8.png";
function Store() {
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
              <li className="checked">
                <LaptopStore
                  image={lap1}
                  pcName="PC PORTABLE MSI PRESTIGE 15 I7 12È GÉN 8GO GTX 1650"
                  price="TND 4569,00"
                />
              </li>
              <li>
                <LaptopStore
                  image={lap2}
                  pcName="PC PORTABLE ASUS TUF GAMING A15 AMD RYZEN 9 8GO RTX 4070"
                  price="TND 5119,00"
                />
              </li>
              <li>
                <LaptopStore
                  image={lap2}
                  pcName="PC Portable Gamer LENOVO LOQ 15APH8 AMD RYZEN 7 32Go RTX 3050"
                  price="TND 3259,00"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="footerStore">
          <p>© 2024 TechMe. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Store;
