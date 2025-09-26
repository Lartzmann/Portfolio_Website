import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavBar() {
      const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            {/* Navbar */}
            <div className="flex justify-between items-center p-6 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
                <h1 className="font-bold text-2xl">
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

            {menuOpen && (
            <nav
                className="absolute top-16 right-4 z-50 bg-[#1e293b] text-white p-6rounded-xl shadow-2xl w-56 animate-fade-in-up p-6"
            >
                <ul className="flex flex-col gap-4 text-lg">
                <li>
                    <a href="#skills" onClick={toggleMenu} className="hover:text-[#3b82f6] transition-colors">
                    Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={toggleMenu} className="hover:text-[#3b82f6] transition-colors">
                    Projects
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={toggleMenu} className="hover:text-[#3b82f6] transition-colors">
                    About Me
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={toggleMenu} className="hover:text-[#3b82f6] transition-colors">
                    Contact
                    </a>
                </li>
                </ul>
            </nav>
            )}
        </>
    )
}

export default NavBar;