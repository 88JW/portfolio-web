import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/Astro.logo.małe.białe.png";
import git from "../assets/git.png";
import lin from "../assets/lin.png";
import ins from "../assets/ins.png";
import fb from "../assets/fb.png";
import "./footer.css";
// import { HashLink } from "react-router-hash-link";
// import { BrowserRouter as Router } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="footer-box">
          <Col md={6} className="footer-text">
            <p>
              Poszukuję miejsca w firmie, która będzie chciała dać szansę osobie
              zmieniającej branżę.
            </p>
          </Col>
          <Col md={6} className="footer-socialmedia">
            {" "}
            <a href="https://github.com/88JW/">
              <img src={git} alt="" className="smPng" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=1436198145">
              <img src={fb} alt="" className="smPng" />
            </a>
            <a href="https://www.flickr.com/photos/127353492@N06/">
              <img src={ins} alt="" className="smPng" />
            </a>
            <a href="https://www.linkedin.com/in/wojciech-jasku%C5%82a-b91767137/">
              <img src={lin} alt="" className="smPng" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
