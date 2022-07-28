import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import "./projects.css";
import jeden from "../assets/projects-img/1.png";
import dwa from "../assets/projects-img/2.png";
import trzy from "../assets/projects-img/3.png";
import czetery from "../assets/projects-img/4.png";
import piec from "../assets/projects-img/5.png";
import szesc from "../assets/projects-img/6.png";

export const Projects = () => {
  const projects = [
    {
      title: "WhenDżem",
      technologies: "React",
      imgURL: jeden,
    },

    {
      title: "WhenDżem",
      technologies: "React",
      imgURL: dwa,
    },
    {
      title: "WhenDżem",
      technologies: "React",
      imgURL: trzy,
    },
    {
      title: "WhenDżem",
      technologies: "React",
      imgURL: czetery,
    },
    {
      title: "WhenDżem",
      technologies: "React",
      imgURL: piec,
    },
    {
      title: "WhenDżem",
      technologies: "React",
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
              Magna velit sint in mollit non. Ea aliquip ut cillum ut. Fugiat
              voluptate ipsum est labore dolore aliqua. Reprehenderit elit
              eiusmod enim sunt aliquip excepteur. Labore deserunt pariatur
              minim sit non duis. Eu sunt mollit sit veniam tempor nisi
              incididunt magna duis sit ad.
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
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <p>
                      Lorem labore excepteur esse eu officia ex. Deserunt nulla
                      ut fugiat Lorem. Mollit incididunt sit anim consequat
                      laborum duis ad.
                    </p>
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
