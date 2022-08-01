import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import "./projects.css";
import jeden from "../assets/projects-img/1.png";
import dwa from "../assets/projects-img/2.png";
import trzy from "../assets/projects-img/3.png";
import czetery from "../assets/projects-img/4.png";
import piec from "../assets/projects-img/5.png";
import szesc from "../assets/projects-img/6.png";
import mojaStrona from "./../assets/projects-img/mojaStrona.png";
import Netlify from "./../assets/4691413_netlify_icon.png";
import wordpress from "./../assets/211925_social_wordpress_icon.png";

export const Projects = () => {
  const projects = [
    {
      title: "www.Einto.pf",
      technologies: "Landing Page",
      imgURL: jeden,
    },

    {
      title: "Oregano.com",
      technologies: "Layout Strony Ecommarce",
      imgURL: dwa,
    },
    {
      title: "WhenDżem",
      technologies: "Aplikacja PWA",
      imgURL: trzy,
    },
    {
      title: "INCREDIBLE ",
      technologies: "Pierwszy Landing Page",
      imgURL: czetery,
    },
    {
      title: "Portfolio",
      technologies: "Strona z moim portfolio",
      imgURL: piec,
    },
    {
      title: "PogodaPWA",
      technologies: "Pierwsza Aplikacja Pogodowa",
      imgURL: szesc,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Moje projekty:</h2>
            <p>
              Chciałbym zaprezentować projekty, w których wykorzystałem
              dotychczas posiadaną wiedzę. Poruszam się w sferze front-endu w
              następujących językach: HTML, CSS, JavaScript, React, Bootstrap,
              jQuery, RWD i BEM. Cały czas się rozwijam i uczę się nowych
              rzeczy.
            </p>

            <Tab.Container class="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Moje projekty:</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Strona dla uczniów:</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                    <h4>Wszystkie projekty dostępne są na:</h4>
                    <a href="https://app.netlify.com/teams/88jw/sites">
                      <img src={Netlify} alt="" className="" />
                    </a>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <span>
                      <img
                        src={mojaStrona}
                        alt="mojaStrona"
                        className="mojaStrona-img"
                      />
                      <p>
                        Stronę prowadziłem przez całą moją pracę w szkole.
                        Strona była przeznaczona dla uczniów ZSE, umieszczane
                        były tam materiały dydaktyczne, autorskie notatki, filmy
                        instruktażowe, sprawdziany i klasówki. Strona z uwagi na
                        wygodę i szybkość dodawania kolejnych materiałów
                        postawiona na platformie WordPress pod adresem:
                      </p>
                      <a href="https://wojciechjaskula.wordpress.com/">
                        <img src={wordpress} alt="" className="" />
                      </a>
                    </span>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
