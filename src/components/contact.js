import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
import email from "../assets/MessageSent.png";

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
          <Col className="contact-img" md={6}>
            <img src={email} alt="emailsend" />
          </Col>
          <Col className="contact-col" md={6}>
            <form ref={form} onSubmit={sendEmail}>
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
                <Col>
                  <input
                    type="text"
                    name="user_company"
                    placeholder="Firma..."
                  />
                </Col>
                <Col>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email..."
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Temat wiadomości..."
                  />
                </Col>
                <Col md={12}>
                  <textarea name="message" placeholder="Wiadomość..." />
                </Col>
                <input type="submit" value="Send" />
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
