import React from "react";
import Head from "../components/head.jsx";
import ContactForm from "../components/ContactComponent.jsx";
import "../components/styling/contact.css";
function Contact() {
  return (
    <div>
      <div className="sticky">
        <Head />
      </div>
      <div className="FormAll">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
