import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import forty from "../assets/41.png";
import fifty from "../assets/51.png";
import sixty from "../assets/61.png";
import seventy from "../assets/71.png";
import "./skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box">
              <h2>Moje umiejętności:</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-carousel"
              >
                <div className="item-carousel">
                 
                  <img src={seventy} alt="" /> <h3>HTML and CSS</h3>
                </div>
                <div className="item-carousel">
                  
                  <img src={sixty} alt="" /><h3>Bootstrap</h3>
                </div>
                <div className="item-carousel">
                  
                  <img src={fifty} alt="" /><h3>RWD and BEM</h3>
                </div>
                <div className="item-carousel">
                  
                  <img src={sixty} alt="" /><h3>React</h3>
                </div>
                <div className="item-carousel">
                  
                  <img src={forty} alt="" />
                  <h3>jQuery</h3>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
