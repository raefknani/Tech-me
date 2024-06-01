import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import '../components/styling/ContactFormCSS.css';

function ContactForm() {
  const location = useLocation();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    // You can perform any other actions here, such as sending the message
    // This is just a basic example
  
    setTimeout(() => {
      setSent(true);
    }, 0); // Change this to the number of milliseconds you want to wait
  };

  useEffect(() => {
    // Apply global CSS rule for box-sizing when the component mounts
    document.body.style.boxSizing = 'border-box';

    // Add or remove the contact-page class based on the current location
    if (location.pathname === '/contact') {
      document.body.classList.add('contact-page');
    } else {
      document.body.classList.remove('contact-page');
    }

    // Clean up function to remove added styles and class when the component unmounts
    return () => {
      document.body.style.boxSizing = '';
      document.body.classList.remove('contact-page');
    };
  }, [location]);

  return (
    <div className="ContactForm">
      <div className={`wrapper centered ${sent ? 'sent' : ''}`}>
        <article className="letter">
          <div className="side">
            <h1 >Contact us</h1>
            <p>
              <textarea
                className='starLokza'
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </p>
          </div>
          <div className="side">
            <p>
              <input 
                className='starLokza'
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <input
                className='starLokza'
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <button onClick={handleSend}>Send</button>
            </p>
          </div>
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
        {sent && <p className="result-message centered">thank you ! Keep an eye out for our soon-to-come contact!</p>}
      </div>
    </div>
  );
}

export default ContactForm;