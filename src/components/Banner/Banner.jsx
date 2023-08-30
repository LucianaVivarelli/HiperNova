import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo  from '../../assets/Logo-Banner.png'
import { BsWhatsapp } from 'react-icons/Bs';
import './Banner.sass'
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["HiperNova"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const currentText = getCurrentText();
    setText(currentText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && currentText === toRotate[index]) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const getCurrentText = () => {
    const i = loopNum % toRotate.length;
    return isDeleting
      ? toRotate[i].substring(0, text.length - 1)
      : toRotate[i].substring(0, text.length + 1);
  };

  const bannerText = [
    " Nós transformamos o seu site dos sonhos em realidade!"
  ];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={15} md={6} xl={7}>
            <h1 className="wrap">{text}</h1>
            <span className="Banner-p" >{bannerText}</span>
            <div className="btn-Banner animate__animated animate__shakeX">
            <a href="URL_DO_WHATSAPP" target="_blank" rel="noopener noreferrer" className="btn">
            Entre em Contato conosco! <span> <BsWhatsapp />
            </span>
            </a>
            </div>
          
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={logo} className="logo-Banner img img-fluid" alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
