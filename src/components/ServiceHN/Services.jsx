import { Container, Row, Col } from "react-bootstrap";
import Ecommerce from "../../assets/E-commerce.png";
import LandingPage from "../../assets/LandingPage.png";
import Melhoramos from "../../assets/MelhoramosSeuSite.png";
import SiteProfissional from "../../assets/Site-Profissional.png";
import { FcServices} from 'react-icons/fc'
import "./Services.sass";

const servicesData = [
  {
    img: Ecommerce,
    title: "E-commerce",
    text: "Planejamos junto a você o E-commerce do Sucesso! Somos focados em excelencia e priorizamos as vontades e ideias dos clientes",
  },
  {
    img: LandingPage,
    title: "Landing Page",
    text: "Nossas Landing Pages São feitas com muita dedicação e escolhendo a melhor tecnologia que atende as suas necessidades diárias",
  },
  {
    img: SiteProfissional,
    title: "Site Profissional Pessoal e Empresarial",
    text: "Fazemos qualquer tipo de Site empresarial, Venha tirar o seu site do papel e vamos construir juntos o seu sonho",
  },
  {
    img: Melhoramos,
    title: "Melhoramos o seu Site",
    text: "Seu site está antigo/ Já não funciona tão bem assim e você não sabe o que fazer? Relaxe, iremos te ajudar a melhorar e modernizar seu site .",
  },
];

export const Services = () => {
  return (
    <section className=" container-services py-5 animate__animated  animate__fadeInRight">
      <Container>
        <Row>
          <Col className="title-col text-center">
            <div>
              <h2 className="title-main">Serviços<span> <FcServices /> </span></h2>
              
            </div>
          </Col>
        </Row>
        <Row>
          {servicesData.map((service, index) => (
            <Col md={6} className=" container-card mb-4 " key={index}>
              <div className="services">
                <div className="card bg-transparent">
                  {" "}
                  <img className="card-img" src={service.img} alt="" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
