import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/1.png";
import me2 from "../assets/Coding.png";
import "./banner.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  // animacja napisu
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Junior Fornt-Developer",
    "Web Developer",
    "Były Nauczyciel",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(1);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligin-items">
          <Col xs={12} md={6} xl={7} className="banner-text">
            <h1>{`Cześć! Jestem Wojciech, `} </h1>
            <h1>
              <span className="wrap">{(` `, text)}</span>
            </h1>
            <p>
              Skoro tu jesteś to chciałbym zaproponować Ci swoją dyspozycyjność
              na stanowisko Front-End Developera. Posiadam wieloletnie
              doświadczenie pracy z kodem. Do tej pory pracowałem jako
              nauczyciel zajmujący się głównie aplikacjami webowymi. Chcę
              zmienić branżę ale dalej rozwijać się w sfeze front-endu. Staram
              się rozwiązywać problemy, a nie je tworzyć, skupiam się na
              rozwiązaniach.
            </p>
            <p>
              Nie lubię stać w miejscu stąd moja decyzja o zmianie zawodu. Moja
              dotychczasowa praca z ludźmi, komunikatywność i bezkonfliktowość
              będzie dużym wsparciem dla zespołu, do którego dołączę.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <img src={me2} className="meFoto"></img>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
