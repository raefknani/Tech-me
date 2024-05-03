import React from "react";
import "../components/styling/LaptopBox.css";

function LaptopStore(props){
    return(
        <div>
            <div class="LaptopBox Laptop">
                <img src={props.image} alt="none" className="imageObject" />
                <p class="p1">{props.pcName}</p>
                <p class="p2">{props.price}</p>
            </div>
        </div>
    );  
}

export default LaptopStore;