import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.jpeg'
import { SlSocialLinkedin, SlSocialTwitter, SlSocialInstagram, SlSocialFacebook } from 'react-icons/sl';
import { useState, useEffect } from 'react'

import {
  BrowserRouter as Router
} from "react-router-dom";

import './NavBar.sass'

export const NavBar= () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="100"
          height="100"
          className="logo-nav"
          alt="Loggo HiperNova"
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
            <Nav.Link href="#AboutUs" className={activeLink === 'AboutUs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('AboutUs')}>Sobre</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projetos</Nav.Link> 
            <Nav.Link href="#Techs" className={activeLink === 'Techs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Techs')}>Tecnologias</Nav.Link> 
            <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Serviços</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                
                <a href="#"><SlSocialInstagram/> </a>
               
                <a href="#"><SlSocialLinkedin /></a>
                
                <a href="#"><SlSocialFacebook /></a>
                
                <a href="#"><SlSocialTwitter /></a> 
              </div>
             
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  );
}

