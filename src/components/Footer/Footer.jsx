import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <footer  className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>Logo</Col>
          <Col md={2}>
            <h5>Contato</h5>
          </Col>
          <Col md={2}>
            <h5>Projetos</h5>
          </Col>
          <Col md={2}>
            <h5>Sobre</h5>
          </Col>
          <Col md={2}>
            <h5>Serviços</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
