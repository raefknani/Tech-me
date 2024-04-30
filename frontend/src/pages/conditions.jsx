import React from "react";
import Head from "../components/head.jsx";
import "../components/styling/conditions.css";
import logo from "../assets/images/logos/logo.png";

function Conditions() {
  return (
    <div className="conditions-container">
      <Head />
      <div className="help">
        <p className="title">Terms of use</p>
        <p className="description">
          Welcome to TechMe! These terms and conditions outline the rules and
          regulations for the use of TechMe's website.
        <div className="description1">By accessing this website, we assume you accept these terms and
          conditions in full.</div>
        </p>
        <div className="responsibilities">
          <p className="sub-heading">
            <strong className="ko">User's Responsibilities:</strong>
          </p>
          <div className="fff">
            <p className="kl">● Users must provide accurate and complete information when configuring their computers</p>
            <p className="kl">● Users are responsible for maintaining the security of their accounts and passwords.</p>
            <p className="kl">● Users must avoid actions that disrupt the website or affect others' experiences.</p>
          </div>
        </div>
        <div className="intellectual-property">
          <p className="sub-heading">
            <strong className="ko">Intellectual Property:</strong>
          </p>
          <p className="kll">
          Content on TechMe's site, like text, graphics, logos, images, and software, belongs to TechMe or its suppliers, protected by copyright. Users can't reproduce, distribute, or create derivative works without TechMe's express permission.
          </p>
          <div className="int">
            <p className="kl">
              
            </p>
          </div>
        </div>
        <p className="privacy-policy">
          <strong className="ko">Privacy Policy:</strong>
        </p>
        <p className="kl">
          TechMe collects and processes personal data in accordance with its
          Privacy Policy. By using this website, you consent to such processing
          and warrant that all data provided by you is accurate.
        </p>
        <p className="disclaimer">
          <strong className="ko">Disclaimer of Warranties:</strong>
        </p>
        <p className="kl">
          TechMe makes no warranties or representations about the suitability,
          reliability, availability, timeliness, or accuracy of the information,
          products, services, and related graphics contained on the website for
          any purpose.
        </p>
        <p className="limitation">
          <strong className="ko">Limitation of Liability:</strong>
        </p>
        <p className="kl">
          In no event shall TechMe be liable for any direct, indirect, punitive,
          incidental, special, or consequential damages arising out of, or in
          any way connected with, the use of this website.
        </p>
        <p className="governing-law">
          <strong className="ko">Governing Law:</strong>
        </p>
        <p className="kl">
          These terms and conditions shall be governed by and construed in
          accordance with the laws of Tunisia, and any disputes relating to these
          terms and conditions will be subject to the exclusive jurisdiction of
          the international courts.
        </p>
        <div className="reception">
          <p className="sub-heading">
            Reception :
          </p>
          <p className="az"><span className="black-circle">&#9679;</span> Missing accessory or part:</p>
          <div className="ord">
            <p className="kl">
              Upon receiving your order, you must verify that your product is
              complete (including its accessories).
            </p>
          </div>
          <div className="ord">
            <p className="frr" >
            If any accessories are missing from your ordered product, contact TechMe Customer Service within two (2) calendar days of receiving your order to address the issue.
            </p>
          </div>
          <p className="az" ><span className="black-circle">&#9679;</span> Damaged delivered products:</p>
          <div className="ord">
            <p className="frr">
            If you find the ordered product damaged, contact TechMe After Sales Service by phone within two (2) calendar days of receiving your order.
            </p>
          </div>
        </div>
        <p className="terms">
          By using TechMe's website, you agree to abide by these terms and
          conditions. If you do not agree with any part of these terms and
          conditions, please do not use our website.
        </p>
        

      </div>
      <img className="logo" src={logo} alt="Description de votre image" ></img>
    </div>
  );
}

export default Conditions;