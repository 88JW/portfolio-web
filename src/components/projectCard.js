import { Col } from "react-bootstrap";
import "./projectCard.css";

export const ProjectCard = ({ title, technologies, imgURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-img">
        <img src={imgURL} />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{technologies}</span>
        </div>
      </div>
    </Col>
  );
};
