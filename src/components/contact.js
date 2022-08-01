import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
import email from "../assets/MessageSent.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mfa6xz6",
        "template_t7imtuc",
        form.current,
        "yAMqjGK4hbNVBJPwK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact-box" id="ContactUs">
      <Container>
        <Row>
          <Col className="contactImg" md={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__backInLeft " : ""
                  }
                >
                  {" "}
                  <img src={email} alt="emailsend" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col className="contact-col" md={6}>
            <form ref={form} onSubmit={sendEmail}>
              <h2>Skontaktuj się ze mną:</h2>
              <Row>
                <Col md={6}>
                  <input type="text" name="user_fname" placeholder="Imię..." />
                </Col>
                <Col md={6}>
                  <input
                    type="text"
                    name="user_sname"
                    placeholder="Nazwisko..."
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="text"
                    name="user_company"
                    placeholder="Firma..."
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Temat wiadomości..."
                  />
                </Col>{" "}
                <Col md={12}>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email..."
                  />
                </Col>
                <Col md={12}>
                  <textarea name="message" placeholder="Wiadomość..." />
                </Col>
                <Col md={12}>
                  <input
                    type="submit"
                    value="Wyślij"
                    className="submitbutton"
                  />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
