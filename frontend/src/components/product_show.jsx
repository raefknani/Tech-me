import React from "react";
import "../components/styling/ProductShow.css";

import Slider from "./Slider";
const imgCMT = "PC PORTABLE MSI PRESTIGE 15 I7 12È GÉN 8GO GTX 1650";
function ProductShow() {
    return (
        <div className="mainPSH">
            <div className="PSH">
            <h1 >Choose Your Homie</h1>
            </div>
            <Slider />
            
            <a href="store"><button className="shopall">More...</button></a>
        </div>
    );
}

export default ProductShow; 