import { Container, Navbar } from "react-bootstrap";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";
import "./NavBar.sass";

export const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="100"
            height="100"
            className="logo-nav"
            alt="Logo HiperNova"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="social-icon">
            <a target="_blank" href="https://www.instagram.com/hipernovasol/">
              <FaInstagram />
            </a>
            <a target="_blank" href="https://twitter.com/hipernovasol">
              <FaTwitter />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
