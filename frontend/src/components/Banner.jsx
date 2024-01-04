import { Container, Row, Col } from "react-bootstrap";
import yo from "../assets/img/yo.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {

  return (
    <section className="banner" id="Home">
      <Container className="content">
      <Row className="aligh-items-center">
        <Col xs={12} md={12} xl={12} className="text-center">
        <div className="foto">
          <img src={yo} alt="Lucas Mazzarino" className="foto-img" />
          </div>
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>Hi! I'm Lucas Mazzarino Analyst Programmer</h1>
          <p>
          Passionate Full Stack Developer dedicated to programming and system development. Exceptional problem-solving skills and a drive to tackle new challenges. Seeking professional growth opportunities to contribute substantial value to my work.
          </p>
          <button>
            <a href="/CV Lucas Mazzarino.pdf" target="_blank" rel="noopener noreferrer">
              <span>Resume</span>
              <ArrowRightCircle size={25} />
            </a>
          </button>
        </Col>
      </Row>
    </Container>
  </section>
  );
};