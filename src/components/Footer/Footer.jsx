
import { Container, Row, Col } from 'react-bootstrap';
import {  FaInstagram, FaTwitter } from 'react-icons/fa';



export const Footer = () => {
  return (
    <div className="footer ">
      <Container>
        <Row>
          <Col md={4}>
          <div className="social-icon d-inline-flex">
              <a href="https://www.instagram.com/hipernovasol/">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/hipernovasol">
                <FaTwitter />
              </a>
            </div>
          </Col>
        
        </Row>
      </Container>
    </div>
  );
};
