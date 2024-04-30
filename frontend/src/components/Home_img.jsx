import React from "react";
import homeImg from "../assets/images/backgrounds/img_home_test3.png";
import "../components/styling/imgBTW.css";
import { NavLink } from "react-router-dom";


function Home_img() {

    return(
        <div className="homeIMG">
            <img src={homeImg} alt="home_imasge" style={{width: "100%", height: "100%"  }}/>
            <div className="lokza" >
                <h1>Your satisfaction is our priority</h1>
                <div className="btns">
                    <a href="store" ><button>​Shop now​</button></a>
                    <NavLink to="/Filter-Option"><button>Filter options</button></NavLink>
                </div>

            </div>
        </div>
    );
}

export default Home_img;
