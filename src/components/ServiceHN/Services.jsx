import { Container, Row, Col } from 'react-bootstrap';

const servicesData = [
  {
    title: 'E-commerce',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget est sed nisi condimentum varius.',
  },
  {
    title: 'Landing Page',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget est sed nisi condimentum varius.',
  },
  {
    title: 'Site Profissional Pessoal e Empresarial',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget est sed nisi condimentum varius.',
  },
  {
    title: 'Melhoramos o seu Site',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget est sed nisi condimentum varius.',
  },
  {
    title: 'Comprometimento',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget est sed nisi condimentum varius.',
  },
];

export const Services = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="divider mb-4">
              <h2 className="mb-0">Serviços</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {servicesData.map((service, index) => (
            <Col md={6} className="mb-4" key={index}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


