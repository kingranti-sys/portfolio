// import React from 'react';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLocationDot, FaCode } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import "../pages/Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_t71kxbe",
        "template_gkosyxl",
        form.current,
        {
          publicKey: "mCGLe8c8aLl5agM-1",
        },
      );

      setStatus("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Message could not be sent. Pls try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-heading">
          <p className="contact-subtitle">LET'S CONNECT</p>
          <h1>
            Contact <span>Me</span>
          </h1>
          <p>
            Do you have an idea, opportunity or project in mind that want to transform
            into web experience? Let's discuss it now!!!.
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="contact-info">
              <h2>Can we talk about your project.</h2>
              <p>
                I'm a Full-Stack Web Developer passionate about building useful,
                responsive web applications. Send me a message and let's
                connect.
              </p>

              <div className="contact-details">
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p>adebimpeaderanti@gmail.com</p>
                </div>
              </div>

              <div className="contact-details">
                <FaCode />
                <div>
                  <h3>Location</h3>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>

              <div className="contact-detail">
                <FaCode />
                <div>
                  <h3>My Experties</h3>
                  <p>Full-Stack Web Development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-card">
              <h2>Send Me a Message</h2>

              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    className="form-control"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="user_email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    className="form-control"
                    placeholder="Enter yoyr email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                {status && (
                  <p className="contact-status" role="status">
                    {status}
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={sending}
                >
                  {sending ? "sending..." : "send message"}
                  <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
