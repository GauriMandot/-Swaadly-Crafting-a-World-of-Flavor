import { useContext } from 'react';
import './Contact.css'
import userContext from '../utility/userContext';
// import Header from './Header';

const Contact = () => {

  const {userName}=useContext(userContext);

  return (
    <div id="Contact">
    {/* <Header></Header> */}
      <div id="message-box">
        <h1 id='contact-heading'>{userName!=='User' && userName + ", "}  Send us a Message</h1>
        <form action="">
          <label htmlFor="full-name">Name*</label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="phone-number">Phone Number*</label>
          <input
            type="tel"
            id="phone-number"
            name="phone-number"
            placeholder="Enter your Phone number"
            required
          />

          <label htmlFor="subject">Subject*</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message*</label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          />

          <button id='contact-submit-btn' type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <p>
          <strong>Or reach us directly:</strong>
        </p>
        <p>
          Email: <a href="mailto:support@swaadly.com">support@swaadly.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
