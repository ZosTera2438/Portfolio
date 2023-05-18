import React, { useEffect, useState } from "react";
import { FaTerminal, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` w-full flex items-center  fixed top-0 z-20  ${
        menuOpen ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div
        className={`sm:px-16 px-4 py-5 w-full ${scrolled ? "bg-primary" : ""}`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="main"
              smooth={true}
              duration={500}
              offset={-50}
              className="text-sm cursor-pointer leading-relaxed inline-block mr-4 py-2 pl-2 whitespace-nowrap uppercase text-white"
            >
              <p className="flex items-center text-white">
                <FaTerminal className="text-xl text-white" />
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className=" text-xl font-semibold ml-3"
                >
                  Vaibhav Gupta
                </Link>
              </p>
            </Link>
            <button
              className="text-white cursor-pointer text-xl active:rotate-180 py-1 block lg:hidden"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div
            className={
              "lg:flex items-center" + (menuOpen ? " flex" : " hidden")
            }
          >
            <div className="flex flex-col lg:flex-row lg:ml-auto">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                offset={-100}
                className="px-3 cursor-pointer py-2 flex items-center uppercase font-semibold leading-snug text-white hover:underline underline-offset-8 w-full"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
                className="px-3 py-2 cursor-pointer flex items-center uppercase font-semibold leading-snug text-white hover:underline underline-offset-8 w-full"
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-100}
                className="px-3 py-2 cursor-pointer flex items-center uppercase font-semibold leading-snug text-white hover:underline underline-offset-8 w-full"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="px-3 py-2 cursor-pointer flex items-center uppercase font-semibold leading-snug text-white hover:underline underline-offset-8 w-full"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
