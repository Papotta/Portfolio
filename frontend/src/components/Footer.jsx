import { Container, Col, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.svg'




export const Footer = () => {

  return(
    <footer className="footer">
      <Container>
        <Row className="align-items-start justify-content-end">
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/lucas-mazzarino-594b88229/' target='-blank' rel="noopener noreferrer"> <img src={navIcon1} alt='' /></a>
              <a href='https://github.com/Papotta' target='-blank' rel="noopener noreferrer"> <img src={github} alt='' /></a>
            </div>
            <p>CopyRigth 2022. All right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}