import { Container, Row, Col } from "react-bootstrap";
import { GiTechnoHeart } from "react-icons/gi";

export const About = () => {
  return (
    <section className="container-main py-5 animate__animated animate__fadeInLeft">
      <Container>
        <Row>
          <Col className="title-col  text-center">
            <h2 className="title-main">
              Quem Somos
              <span>
                <GiTechnoHeart />
              </span>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="about-p" md={8}>
            <p>
              Bem-vindo ao nosso mundo de inovação digital e criatividade
              técnica! Somos um grupo de mentes apaixonadas pela programação,
              unidas por um objetivo comum: construir experiências digitais
              excepcionais por meio de desenvolvimento web avançado.
            </p>
            <p>
              Nossa história começou em uma jornada colaborativa de aprendizado
              e paixão pela tecnologia. Movidos pela ambição de crescer
              profissionalmente e conquistar a autonomia no mundo da
              programação, decidimos unir forças e criar nossa própria Empresa.
              Especializados em desenvolvimento web, somos mestres em
              transformar ideias criativas em realidade digital.
              <span>
                
                Nossa abordagem é centrada no usuário, e buscamos constantemente
                novas maneiras de aprimorar a experiência digital, criando
                interfaces que cativam e funcionalidades que surpreendem.
              </span>
            </p>

            <p>
              Nossa missão é simples: Moldar o futuro digital por meio de
              códigos e designs inovadores. Temos como compromisso: Trabalhamos
              lado a lado com nossos clientes, mantendo-os envolvidos em cada
              etapa do processo. Acreditamos que a comunicação eficaz é a chave
              para construir relacionamentos duradouros e projetos
              bem-sucedidos.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
