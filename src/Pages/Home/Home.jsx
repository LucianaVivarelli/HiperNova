import { NavBar } from "../../components/NavBar/NavBar";
import { Banner } from "../../components/Banner/Banner";
import { About } from "../../Pages/About/About";
import { Services } from "../ServiceHN/Services";
import { Footer } from "../../components/Footer/Footer";
import { useRef } from "react";

export const Home = () => {
  const ServicesNav = useRef(null);
  const AboutNav = useRef(null);

  function scrollToServices() {
    ServicesNav.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollToAbout() {
    AboutNav.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="Home">
      <NavBar scrollToServices={scrollToServices} scrollToAbout={scrollToAbout} />
      <Banner />
      <div ref={AboutNav}>
        <About />
      </div>
      <div ref={ServicesNav}>
        <Services />
      </div>
      <Footer />
    </div>
  );
};
