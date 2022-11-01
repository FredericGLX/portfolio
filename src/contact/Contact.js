import './Contact.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          console.log('Message sent');
          e.target.reset();
        },
        (error) => {
          console.log("Something went wrong, message couldn't be sent");
        }
      );
    window.alert('Thank you for your email.');
  };

  return (
    <div className="contact" name="contact">
      <div className="contact__left">
        <h2>Connect with me:</h2>
        <p>Interested in working together? {<br></br>} Let's have a chat</p>
      </div>
      <div className="contact__right">
        <p className="contact__right__title">
          Contact me, let's make magic together
        </p>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="user_name" required />
            <label className="label__name" for="user_name">
              Name
            </label>
          </div>
          <div className="form-group">
            <input type="email" name="user_email" required />
            <label className="label__email" for="user_email">
              Email
            </label>
          </div>
          <div className="form-group">
            <textarea
              className="input__message"
              type="text"
              name="message"
              required
            />
            <label className="label__message" for="message">
              Message
            </label>
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
