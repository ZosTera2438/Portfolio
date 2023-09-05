import React, { useEffect, useState } from "react";
import { FaTerminal, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    {
      id: "hero",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
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
      className={`fixed w-full z-50 border-b border-gray-600 ${
        menuOpen ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div
        className={`w-full text-sectionHeadText flex flex-wrap md:flex-nowrap items-center justify-around mx-auto ${
          scrolled ? "bg-primary" : ""
        }`}
      >
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer whitespace-nowrap uppercase text-white"
        >
          <FaTerminal className="inline-block text-white" />
          <span className="inline-block font-medium font-merriweather ml-3">
            Vaibhav Gupta
          </span>
        </Link>
        <div className="flex md:order-2">
          <a
            href="https://drive.google.com/drive/folders/1HHHdXvkw1v-5Gx_VgfINKmyzRtqZ1IxT"
            target="_blank"
            rel="noreferrer"
          >
            <button className="my-2 mr-4 md:mr-0 border-2 border-gray-600 font-merriweather shadow-teal-600 shadow-lg text-white py-3 px-6 rounded-xl">
              Resume <FaArrowRight className="ml-1 inline" />
            </button>
          </a>
          <button
            className="m-2 cursor-pointer text-white active:rotate-180 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={
            "md:order-1 md:flex flex-col md:flex-row w-full md:w-fit md:m-2 justify-center items-center p-5 md:space-x-8" +
            (menuOpen ? " flex" : " hidden")
          }
        >
          {navLinks.map((nav) => (
            <div
              key={nav.id}
              className=" font-merriweather text-white p-1.5 md:p-0 hover:underline hover:text-teal-500 translate-y-1 underline-offset-4 cursor-pointer"
            >
              <Link
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-50}
                className=" font-serif"
              >
                {nav.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
