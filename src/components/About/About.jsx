

import { Container, Row, Col } from 'react-bootstrap';

export const About = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Quem Somos</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius turpis. Curabitur nec ante
              mauris. Integer bibendum ac mi vel cursus. Etiam euismod, sapien in fringilla blandit, arcu elit
              fermentum libero, eget feugiat erat orci in dui. Praesent sit amet libero non orci tristique facilisis
              a in massa. Nullam porttitor magna vitae velit ullamcorper dignissim. Morbi mattis mauris a fringilla
              bibendum.
            </p>
            <p>
              Vestibulum porttitor, ante a efficitur volutpat, nisl enim tincidunt est, quis luctus velit est ac
              nunc. Aliquam vel convallis urna. Sed iaculis, purus non viverra scelerisque, purus libero dignissim
              urna, quis elementum lectus leo nec purus. Integer tempus risus non felis fermentum, id tincidunt nulla
              congue. Etiam auctor ante sed turpis cursus, at sollicitudin urna convallis. Nullam bibendum magna in
              odio feugiat convallis. Suspendisse ornare justo id dictum fringilla. Donec blandit felis odio, id
              commodo orci facilisis eget. Sed auctor mi nec odio tristique, a aliquam velit sodales.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

