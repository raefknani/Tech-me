import React from "react";
import Head from "../components/head.jsx";
import "../components/styling/conditions.css";


function Conditions() {
  return (
    <div className="conditions-container">
      <Head />
      <div className="help">
        <p className="title">Conditions of use:</p>
        <p className="description">
          Welcome to TechMe! These terms and conditions outline the rules and
          regulations for the use of TechMe's website. By accessing this
          website, we assume you accept these terms and conditions in full. Do
          not continue to use TechMe's website if you do not accept all of the
          terms and conditions stated on this page.
        </p>
        <div className="responsibilities">
          <p className="sub-heading">
            <strong className="ko">User's Responsibilities:</strong>
          </p>
          <div className="fff">
            <p className="kl">
              ● Users must provide accurate and complete information when
              configuring their computers
            </p>
            <p className="kl">
              ● Users are responsible for maintaining the security of their
              accounts and passwords.
            </p>
            <p className="kl">
              ● Users must not engage in any activity that may disrupt the
              proper functioning of the website or interfere with other users'
              experiences
            </p>
          </div>
        </div>
        <div className="intellectual-property">
          <p className="sub-heading">
            <strong className="ko">Intellectual Property:</strong>
          </p>
          <p className="kl">
            All content on TechMe's website, including but not limited to text,
            graphics, logos, images, and software, is the property of TechMe or
            its content suppliers and is protected by international copyright
            laws.
          </p>
          <div className="int">
            <p className="kl">
              Users may not reproduce, distribute, or create derivative works
              based on this content without express permission from TechMe.
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
          accordance with the laws of Tunisia, and any disputes relating to
          these terms and conditions will be subject to the exclusive
          jurisdiction of the international courts.
        </p>
        <div className="reception">
          <p className="sub-heading">Reception :</p>
          <p className="az">
            <span className="black-circle">&#9679;</span> Missing accessory or
            part:
          </p>
          <div className="ord">
            <p className="kl">
              Upon receiving your order, you must verify that your product is
              complete (including its accessories).
            </p>
          </div>
          <div className="ord">
            <p className="kl">
              <span className="q">!</span> If you notice that certain
              accessories of the ordered product are missing from your package,
              please contact TechMe Customer Service no later than two (2)
              calendar days after receiving your order so that we can address
              your complaint.
            </p>
          </div>
          <p className="az">
            <span className="black-circle">&#9679;</span> Damaged delivered
            products:
          </p>
          <div className="ord">
            <p className="kl">
              <span className="q">!</span> If you notice that the ordered
              product is damaged, you can report it to us by contacting TechMe
              After Sales Service via phone no later than two (2) calendar days
              after receiving your order.
            </p>
          </div>
        </div>
        <p className="terms">
          By using TechMe's website, you agree to abide by these terms and
          conditions. If you do not agree with any part of these terms and
          conditions, please do not use our website.
        </p>
        <img className="logo" src={logo} alt="Description de votre image"></img>
      </div>
    </div>
  );
}

export default Conditions;
