"use client";
import SectionTitle from "../shared/SectionTitle";

// const Contact = () => {
//   return (

//        <div className="my-20">
//       <SectionTitle
//         title="Contact Me"
//         subTitle="Share Your Query"
//       ></SectionTitle>
//       <div>

//       </div>
//     </div>
//   )
// }

// export default Contact

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
import { useRef, useState } from "react";
import Link from "next/link";

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
    <div className="my-20">
      <SectionTitle
        title="Contact Me"
        subTitle="Share Your Query"
      ></SectionTitle>
      <div className="contact-content">
        <div className="social-contact flex gap-3 justify-center mt-4">
          <Link
            className="bg-accentRgb rounded px-3 py-2 text-dark flex gap-2 shadow-customShadow items-center shadow-accent"
            href="https://api.whatsapp.com/send?phone=8801738313337"
            target="_blank"
          >
            <RiWhatsappFill className="send-icon" />
            <span className="social-main">WhatsApp</span>
          </Link>

          <Link
            className="bg-accentRgb rounded px-3 py-2 text-dark flex gap-2 shadow-customShadow items-center shadow-accent"
            href="mailto:talk.rashed@gmail.com"
          >
            <AiOutlineMail className="send-icon" />
            <span className="social-main">Email</span>
          </Link>

          <Link
            className="bg-accentRgb rounded px-3 py-2 text-dark flex gap-2 shadow-customShadow items-center shadow-accent"
            href="https://m.me/CodeTravelGame"
            target="_blank"
          >
            <BsMessenger className="send-icon" />
            <span className="social-main">Messenger</span>
          </Link>
        </div>

        <div className="contact-from">
          <div className="divider flex gap-1 items-center justify-center my-3">
            <hr className="w-20 h-px bg-lightDarker border-0" />
            <p>Or</p>
            <hr className="w-20 h-px bg-lightDarker border-0" />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 items-center "
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="outline-none border-2 border-lightDarker h-8  bg-darkLighter p-5 text-light focus:shadow-customShadow focus:shadow-accent focus:border-accentRgb rounded-md lg:w-1/2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="outline-none border-2 border-lightDarker h-8  bg-darkLighter p-5 text-light focus:shadow-customShadow focus:shadow-accent focus:border-accentRgb rounded-md lg:w-1/2"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="outline-none border-2 border-lightDarker h-8  bg-darkLighter p-5 text-light focus:shadow-customShadow focus:shadow-accent focus:border-accentRgb rounded-md lg:w-1/2"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="7"
              placeholder="Your Message"
              required
              className="outline-none border-2 border-lightDarker bg-darkLighter p-5 text-light focus:shadow-customShadow focus:shadow-accent focus:border-accentRgb rounded-md lg:w-1/2"
            ></textarea>
            <div className="cta-div">
              <div>
                <button
                  className="bg-accentRgb rounded px-3 py-2 text-dark shadow-customShadow  shadow-accent"
                  type="submit"
                  value="Send"
                >
                  {successMessage === "Send Message" && (
                    <div className="flex gap-2 items-center">
                      <BsFillSendFill />
                      <p>{successMessage}</p>
                    </div>
                  )}
                  {successMessage === "Sending..." && (
                    <div className="flex gap-2 items-center">
                      <BsFillSendExclamationFill />

                      <p> {successMessage}</p>
                    </div>
                  )}
                  {successMessage === "Sent 😊" && (
                    <div className="flex gap-2 items-center">
                      <BsSendCheckFill />
                      <p> {successMessage}</p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
