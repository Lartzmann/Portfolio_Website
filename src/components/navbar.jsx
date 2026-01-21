// import { useState } from 'react'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";

// function NavBar() {
//       const [menuOpen, setMenuOpen] = useState(false);
//       const toggleMenu = () => setMenuOpen(!menuOpen);

//     return (
//         <>
//             {/* Navbar */}
//             <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
//                 <h1 className="font-bold text-3xl text-[#3b82f6]">
//                     {"<Lartzmann />"}
//                 </h1>
                
//                 <nav className="hidden md:block p-4">
//                     <ul className="flex justify-between list-none">
//                     <li>
//                         <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#hero">Home</a>
//                     </li>
//                     <li>
//                         <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#skills">Skills</a>
//                     </li>
//                     <li>
//                         <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#projects">Projects</a>
//                     </li>
//                     <li>
//                         <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#about">About Me</a>
//                     </li>
//                     <li>
//                         <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg' href="#contact">Contact</a>
//                     </li>
//                     </ul>
//                 </nav>

//                 {/* Mobile Hamburger */}
//                 <button
//                     onClick={toggleMenu}
//                     className="text-2xl hover:cursor-pointer hover:scale-120 transition duration-200 ease-in-out md:hidden"
//                 >
//                     <GiHamburgerMenu />
//                 </button>
//             </div>

//             {menuOpen && (
//             <div className='fixed inset-0 bg-black/50 z-50'>
//             <nav
//                 className="absolute top-6 right-0 z-50 bg-[#1e293b] text-white rounded-x w-60 p-6"
//             >
//                 <ul className="flex flex-col gap-4 text-lg">
//                 <li onClick={toggleMenu} className='text-right'><IoClose className='w-10 h-10'/></li>
//                 <li>
//                     <a href="#skills" onClick={toggleMenu} className="hover:text-[#3b82f6] transition-colors">
//                     Skills
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#projects" onClick={toggleMenu} className="hover:text-[#3b82f6] transition-colors">
//                     Projects
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#about" onClick={toggleMenu} className="hover:text-[#3b82f6] transition-colors">
//                     About Me
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#contact" onClick={toggleMenu} className="hover:text-[#3b82f6] transition-colors">
//                     Contact
//                     </a>
//                 </li>
//                 </ul>
//             </nav>                
//             </div>

//             )}
//         </>
//     )
// }

// export default NavBar;

import { useState } from 'react'
// import { Menu, X } from 'lucide-react'
import { LuMenu, LuX } from 'react-icons/lu';

function NavBar() {
      const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            {/* Navbar */}
            {/* <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg"> */}
        <div className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg transition-opacity duration-300 ${
                menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>            
                <h1 className="font-bold text-3xl text-[#3b82f6]">
                    {"<Lartzmann />"}
                </h1>
                
                <nav className="hidden md:block p-4">
                    <ul className="flex justify-between list-none">
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg transition-colors' href="#hero">Home</a>
                    </li>
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg transition-colors' href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg transition-colors' href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg transition-colors' href="#about">About Me</a>
                    </li>
                    <li>
                        <a className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer text-lg transition-colors' href="#contact">Contact</a>
                    </li>
                    </ul>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="text-2xl hover:cursor-pointer hover:scale-110 transition-transform duration-200 md:hidden z-50"
                >
                    {/* <Menu className="w-7 h-7" /> */}
                    <LuMenu size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <nav
                className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-6">
                    {/* Close Button */}
                    <button 
                        onClick={toggleMenu}
                        className="absolute top-6 right-6 text-white hover:text-[#3b82f6] transition-colors"
                    >
                        <LuX size={28}/>
                    </button>

                    {/* Brand */}
                    <div className="mt-8 mb-10">
                        <h2 className="font-bold text-2xl text-[#3b82f6]">
                            {"<Lartzmann />"}
                        </h2>
                    </div>

                    {/* Menu Items */}
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a 
                                href="#hero" 
                                onClick={toggleMenu} 
                                className="block px-4 py-3 text-lg text-white hover:text-[#3b82f6] hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#skills" 
                                onClick={toggleMenu} 
                                className="block px-4 py-3 text-lg text-white hover:text-[#3b82f6] hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                onClick={toggleMenu} 
                                className="block px-4 py-3 text-lg text-white hover:text-[#3b82f6] hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                onClick={toggleMenu} 
                                className="block px-4 py-3 text-lg text-white hover:text-[#3b82f6] hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                onClick={toggleMenu} 
                                className="block px-4 py-3 text-lg text-white hover:text-[#3b82f6] hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Decorative Element */}
                    <div className="absolute bottom-8 left-6 right-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-30"></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar