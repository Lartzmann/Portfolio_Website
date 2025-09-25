import { useState } from "react";
import HeroImg from "../assets/Lartzmann.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
        {/* Navbar */}
        <div className="flex justify-between items-center py-6 mb-12 ">
          <h1 className="font-bold text-2xl ">
            <span className="text-[#3b82f6]">Lartzmann</span>.dev()
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex justify-between list-none">
              <li className="px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer">
                <a href="#skills">Skills</a>
              </li>
              <li className="px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer">
                <a href="#projects">Projects</a>
              </li>
              <li className="px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer">
                <a href="#about">About Me</a>
              </li>
              <li className="px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="text-2xl hover:cursor-pointer hover:scale-120 transition duration-200 ease-in-out md:hidden"
          >
            {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <nav className="md:hidden mb-6">
            <ul className="flex flex-col gap-4 text-lg bg-[#1e293b] text-white p-6 rounded-lg shadow-lg">
              <li>
                <a href="#skills" onClick={toggleMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      <div className="mb-8 max-w-7xl mx-auto h-dvh px-4">

        {/* Hero Section */}
        <main className="lg:w-[60%] mx-auto">
          <div className="flex justify-center ">
            <img
              src={HeroImg}
              alt="Hero Image"
              className="w-55 h-65 rounded-full mb-8 animate-fade-in-up [animation-delay:200ms]"
            />
          </div>
          <div className="mb-8 text-center">
            <h1 className="text-[2rem] sm:text-[2.5rem] font-semibold animate-fade-in-up [animation-delay:400ms]">
              Hi, I'm Emmanuel
            </h1>
            <p className="text-md sm:text-xl text-[#94a3b8] animate-fade-in-up [animation-delay:600ms]">
              Full Stack Developer | React Enthusiast
            </p>
          </div>
          <div className="flex justify-center animate-fade-in-up [animation-delay:800ms]">
            <div className="flex flex-col w-full sm:w-[80%] ">
              <button className="px-4 py-3 bg-white text-black rounded-lg mb-4 hover:cursor-pointer hover:scale-102 transition duration-500 ease-in-out">
                View Projects
              </button>
              <button id="#projects" className="bg-[#3b82f6] text-white rounded-lg px-4 py-3 hover:cursor-pointer hover:scale-102 transition duration-500 ease-in-out">
                Download CV
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Hero;
