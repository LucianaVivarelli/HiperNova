// components/Tech.jsx

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 export const Tech = () => {
  const technologies = [
    { name: 'Python', icon: 'python' },
    { name: 'Django', icon: 'django' },
    { name: 'React', icon: 'react' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Node.js', icon: 'node-js' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3-alt' },
    { name: 'Sass', icon: 'sass' },
    { name: 'Styled Components', icon: 'file-code' },
  ];

  const techGroups = [];
  for (let i = 0; i < technologies.length; i += 3) {
    techGroups.push(technologies.slice(i, i + 3));
  }


  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Tecnologias</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <Carousel interval={null}>
              {techGroups.map((techGroup, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center">
                    {techGroup.map((tech, innerIndex) => (
                      <div key={innerIndex} className="d-flex flex-column align-items-center mx-4">
                        <i className={`fab fa-${tech.icon} fa-4x mb-3`} />
                        <h4>{tech.name}</h4>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};