import React, { useRef, useState } from "react";
import "./Contact.css";
import { RiWhatsappFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsMessenger,
  BsFillSendExclamationFill,
  BsSendCheckFill,
  BsFillSendFill,
} from "react-icons/bs";

/* Email Js */

import emailjs from "@emailjs/browser";

const Contact = () => {
  /* Email JS Email Sending*/
  const [successMessage, setSuccessMessage] = useState("Send Message");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSuccessMessage("Sending...");
    emailjs
      .sendForm(
        "service_pvtu2sh",
        "template_9q4b2w7",
        form.current,
        "DRNhqloMxqyMyFhwi"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setSuccessMessage("Sent 😊");
          } else {
            setSuccessMessage("Error");
          }
          e.target.reset();
          setTimeout(() => {
            setSuccessMessage("Send Message");
          }, 3000);
        },
        (error) => {
          setSuccessMessage(error.text);
        }
      );
  };
  return (
    <section id='Contact'>
      <div className='container contact-container '>
        <h1 className='title'>Contact</h1>
        <div className='contact-content'>
          <div className='social-contact'>
            <h1 className='contact-title'> Social Media</h1>
            <div className='whatsapp social-contact-btn'>
              <a href='https://api.whatsapp.com/send?phone=8801738313337'>
                <span className='social-main'>WhatsApp</span>
                <RiWhatsappFill className='send-icon' />
                <span className='social-secend'>Message</span>
              </a>
            </div>
            <div className='email-me social-contact-btn'>
              <a href='mailto:talk.rashed@gmail.com?subject=Hello'>
                <span className='social-main'>Email</span>

                <AiOutlineMail className='send-icon' />
                <span className='social-secend'>Email</span>
              </a>
            </div>
            <div className='facebook social-contact-btn'>
              <a href='https://m.me/CodeTravelGame'>
                <span className='social-main'>Messenger</span>

                <BsMessenger className='send-icon' />
                <span className='social-secend'>Message</span>
              </a>
            </div>
          </div>
          <div className='contact-from'>
            <form ref={form} onSubmit={sendEmail}>
              <h1 className='contact-title'> Contact Form</h1>
              <input type='text' name='name' placeholder='Your Name' required />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                required
              />
              <input type='text' name='subject' placeholder='Subject' />
              <textarea
                name='message'
                id=''
                cols='30'
                rows='7'
                placeholder='Your Message'
                required></textarea>
              <div className='cta-div'>
                <div>
                  <button
                    className='btn-contact btn-btn'
                    type='submit'
                    value='Send'>
                    {successMessage === "Send Message" && (
                      <div>
                        <BsFillSendFill className='btn-icon-contact' />
                        {successMessage}
                      </div>
                    )}
                    {successMessage === "Sending..." && (
                      <div>
                        <BsFillSendExclamationFill className='btn-icon-contact' />
                        {successMessage}
                      </div>
                    )}
                    {successMessage === "Sent 😊" && (
                      <div>
                        <BsSendCheckFill className='btn-icon-contact' />
                        {successMessage}
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
