import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { Banner } from "../components/Banner/Banner";
import { Services } from "../components/ServiceHN/Services";

import { About } from "../components/About/About";
export const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Banner />
      <About />
      <Services />
      
      <Footer />
    </div>
  );
};
