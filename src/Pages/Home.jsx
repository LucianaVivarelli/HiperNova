import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { Banner } from "../components/Banner/Banner";
import { Services } from "../components/ServiceHN/Services";
import { Contact } from "../components/Contact/Contact";
import { About } from "../components/About/About";
import { Tech } from "../components/TechAndInfo/Tech";
export const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Banner />
      <About />
      <Tech />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};
