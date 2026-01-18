import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavBar() {
      const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            {/* Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
                <h1 className="font-bold text-3xl text-[#3b82f6]">
                    {"<Lartzmann />"}
                </h1>
                
                <nav className="hidden md:block p-4">
                    <ul className="flex justify-between list-none">
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#hero">Home</a>
                    </li>
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#about">About Me</a>
                    </li>
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#contact">Contact</a>
                    </li>
                    </ul>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="text-2xl hover:cursor-pointer hover:scale-120 transition duration-200 ease-in-out md:hidden"
                >
                    <GiHamburgerMenu />
                </button>
            </div>

            {menuOpen && (
            <div className='fixed inset-0 bg-black/50 z-50'>
            <nav
                className="absolute top-6 right-0 z-50 bg-[#1e293b] text-white rounded-x w-60 p-6"
            >
                <ul className="flex flex-col gap-4 text-lg">
                <li onClick={toggleMenu} className='text-right'><IoClose className='w-10 h-10'/></li>
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
            </div>

            )}
        </>
    )
}

export default NavBar;