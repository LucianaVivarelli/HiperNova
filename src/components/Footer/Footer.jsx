
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

import './Footer.sass'; // Importe seu arquivo Sass para estilos

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <div className="social">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaPinterest className="icon" />
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={3}>
                <h3>Home</h3>
                
              </Col>
              <Col md={3}>
                <h3>Cadastro</h3>
                
              </Col>
              <Col md={3}>
                <h3>Sobre</h3>
                
              </Col>
              <Col md={3}>
                <h3>Contato</h3>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
