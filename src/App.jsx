import { BrowserRouter } from "react-router-dom";
import { Element } from "react-scroll";

import { About, Contact, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary   ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Element name="hero"></Element>
          <Hero />
        </div>
        <Element name="about"></Element>
        <About />
        <Element name="projects"></Element>
        <Works />
        <div className="relative z-0">
          <Element name="contact"></Element>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
