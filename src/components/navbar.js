import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Astro.logo.małe.białe.png";
import git from "../assets/git.png";
import lin from "../assets/lin.png";
import ins from "../assets/ins.png";
import fb from "../assets/fb.png";
import "./navbar.css";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar variant="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} className="logoPng" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                <span>Home</span>
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                <span>Umiejętności</span>
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                <span>Projekty</span>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
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
                <HashLink to="#ContactUs">
                  <button
                    className="constact"
                    onClick={() => console.log("przycisk kontaktu")}
                  >
                    Skontaktuj się ze mną
                  </button>
                </HashLink>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
