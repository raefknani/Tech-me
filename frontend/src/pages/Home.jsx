import React from "react";
import Head from "../components/head.jsx";
import Home_img from "../components/Home_img";
import ProductShow from "../components/product_show";
import Footer from "../components/footer";
import Blanck_space from "../components/blanck_space";
import "../components/styling/Home.css";

function Home() {
  return (
    
      <div>
        <div className="sticky">
          <Head />
        </div>
        <div className="HOMEIMG">
          <Home_img />
        </div>
        <ProductShow />
        <Blanck_space height="50px" />
        <div className="HomeFooter">
          <Footer />
        </div>
      </div>
    
  );
}

export default Home;
