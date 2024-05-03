import React from "react";
import Head from "../components/head.jsx";
import "../components/styling/about.css";
import fcb from "../assets/images/laptop_images/fcb.png";
import insta from "../assets/images/laptop_images/insta.png";
import x from "../assets/images/laptop_images/x.png";
function about() {
  return (
    // Remove unnecessary div element
    <div>
      <div className="sticky">
        <Head />
      </div>

      <div className="About">
        <div>
          <h2 class="g">About TechMe </h2>
          <p className="trrt">
            {" "}
            " Your trusted partner for purchasing technological products "
          </p>

          <div className="padi">
            <p className="a">
              {" "}
              Established in 2024 by three technology enthusiasts: Nermine
              Miled, Raef Knani and Eya Roumani
            </p>
            <p>
              TechMe is an innovative online store that offers a unique and
              personalized shopping experience.
            </p>

            <div>
              <h3 className="ms">Our Mission:</h3>
              <p className="a">
                {" "}
                Democratizing access to cutting-edge technologies by providing
                our customers with solutions tailored to their needs and budget.
              </p>
            </div>
            <div>
              <h3 className="ms">Our core values:</h3>

              <ul className="a">
                <li>
                  <span>Innovation:</span> We are constantly seeking new
                  technologies to enhance our services and provide
                  <p> our customers with the best possible experience.</p>
                </li>
                <li>
                  <span>Passion:</span> Our team consists of technology
                  enthusiasts who are always attentive to your needs.
                </li>
                <li>
                  <span>Simplicity:</span> We are committed to making the
                  purchase of technological products simple and accessible to
                  everyone.
                </li>
                <li>
                  <span>Trust:</span> We are transparent in our practices and
                  committed to providing our customers with quality products at
                  competitive prices.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="ms">What sets us apart:</h3>

              <ul className="a">
                <li>
                  <span>Smart Assistant:</span> Our AI-based search assistance
                  system guides you through your choices based on your needs and
                  budget.
                </li>
                <li>
                  <span>Advanced Filters:</span> Refine your search through
                  free-text descriptions to find the product that perfectly
                  matches your expectations.
                </li>
                <li>
                  <span>No Basic Filters:</span> Forget about limited dropdown
                  menus; TechMe offers you total freedom in searching for your
                  ideal product.
                </li>
                <li>
                  <span>Personalized Advice:</span> Our team of experts is
                  available to advise and assist you in finding the
                  technological solution that best suits you.
                </li>
                <li>
                  <span>International Delivery:</span> We deliver your products
                  worldwide, promptly.
                </li>
              </ul>

              <h3 className="ms">Our commitment:</h3>
              <p className="a">
                Providing our customers with a seamless and personalized
                shopping experience, whether online or in-store.
              </p>
            </div>
          </div>
        </div>
        <div className="ligne"></div>
        <div className="lekh">
          <div className="c">
            <p className="cc">join-us !</p>

            <p className="lil">
              our website: <a href="https://TechMe.com/">https://TechMe.com/</a>
            </p>

            <div className="soc">
              <p className="us">Follow us on social media:</p>
              <div className="allsoc">
                <a href="httdivs://www.facebook.com/TechMe/">
                  <img
                    className="fc"
                    src={fcb}
                    alt="Description de votre image"
                  />
                </a>

                <a href="https://www.instagram.com/TechMe/">
                  <img
                    className="insta"
                    src={insta}
                    alt="Description de votre image"
                  />
                </a>

                <a href="https://twitter.com/TechMe/">
                  <img className="x" src={x} alt="Description de votre image" />
                </a>
              </div>
            </div>

            <div className="last">
              <div>
                <div className="mmail">
                  <span className="grass">Email: </span>
                  <a href="info@techme.com">info@techme.com</a>
                </div>

                <div className="phone">
                  <span className="grass">Phone number:</span> +216 73 000 000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
