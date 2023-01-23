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
    "Game Developer",
    "Fornt-Developer",
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
            <h1>{`Cześć! Jestem Wojtek, `} </h1>
            <h1>
              <span className="wrap">{(` `, text)}</span>
            </h1>
            <p>
              Skoro tu jesteś to chciałbym zaproponować Ci swoją dyspozycyjność
              na stanowisko Developera. Posiadam wieloletnie doświadczenie pracy
              z kodem. Do tej pory pracowałem jako nauczyciel zajmujący się
              głównie aplikacjami webowymi.
            </p>

            <p>
              W 2022 roku zmieniłem branżę szkoleniową na komercyjną i zostałem
              Game Develeoperem w jednej z łódzkich firm. Do moich obowiązków
              należało zarządzanie projektem powstawiania gry, osobami
              przypisanymi do zespołu: grafikami, animatorami, testerami i
              innymi programistami. Ale także za sam proces tworzenia gry jak
              również za sam jej kod.
            </p>
            <p>
              Jestem nastawiony na pracę w zespole, na ciągłe dokształcanie się
              i na rozwiązywanie problemów. Moja dotychczasowa praca z ludźmi,
              zarządzanie projektami i zespołem oraz wiedza programistyczna
              będzie dużym atutem dla zespołu, do którego dołączę.
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
