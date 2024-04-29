import React from "react";
import "../components/styling/Laptop.css";

function Laptop(props) {
    return (
        <div className="lapptopp">
            <img src={props.image} alt="Laptop" />
            <div className="comments">
                <p className="comment1">{props.comment1}</p>

                <p className="comment2">{props.comment2}</p>

            </div>
        </div>
    );
}

export default Laptop;

 
