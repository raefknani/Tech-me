import React from "react";
import "../components/styling/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contentBox">
        <ul className="contenue">
          <li className="about_us">
            <a href="#">
              <h3>ABOUT US :</h3>
            </a>
            <p>
              At TechMe, we're passionate about technology and committed to
              helping you find the computer that perfectly suits your needs. We
              strive to simplify the process of buying PCs online by offering a
              range of high-quality products and allowing you to customize every
              detail according to your preferences.
            </p>
            <a href="about">
              <button className="read_more">Read more</button>
            </a>
          </li>
          <div className="lineBreak"></div>
          <li className="contact_us">
            <a href="#">
              <h3>CONTACT US :</h3>
            </a>
            <p>
              Thank you for your interest in TechMe! We're here to assist you
              with any questions or inquiries you may have.
            </p>
            <p>
              Our customer support team is available to assist you. We strive to
              respond to all inquiries within 24 hours.
            </p>
            <p>Thank you for choosing TechMe for your technology needs.</p>
            <p>
              Please feel free to reach out to us using the contact information
              below:
            </p>
            <a href="contact">
              <button className="read_more">Contact us</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
