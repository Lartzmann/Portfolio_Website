import HeroImg from '../assets/Lartzmann.jpg'
import { GiHamburgerMenu } from "react-icons/gi";

function Hero() {
    return(
        <>
        <div className='mb-8 max-w-7xl mx-auto h-dvh'>
            <div className="flex justify-between py-4 mb-8 ">
                <h1 className="font-bold text-[2.5rem]"><span className='text-[#3b82f6]'>Lartzmann</span>.dev()</h1>
                {/* <h1 className="font-bold text-[2.5rem]">Lo<span className='text-[#94a3b8]'>go</span></h1> */}
                <nav className='hidden md:block'>
                    <ul className='flex justify-between list-none'>
                        <li className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer'>Projects</li>
                        <li className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer'>Skills</li>
                        <li className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer'>Contact</li>
                        <li className='px-4 py-2 hover:text-[#3b82f6] hover:cursor-pointer'>About Me</li>
                    </ul>
                </nav>
                <button className="text-2xl hover:cursor-pointer hover:scale-120 transition duration-200 ease-in-out md:hidden"><GiHamburgerMenu /></button>
            </div>
            <main>
                <div className='flex justify-center'>
                    <img src={HeroImg} alt="Hero Image" className='w-55 h-65 rounded-full mb-8' />
                </div>
                <div className='mb-8 text-center'>
                    <h1 className='text-[2rem] sm:text-[2.5rem] font-bold'>Hi, I'm Emmanuel</h1>
                    <p className='text-md sm:text-xl text-[#94a3b8] '>Full Stack Developer | React Enthusiast  </p>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col w-full sm:w-[80%] '>
                        <button className='px-4 py-3 bg-white text-black rounded-lg mb-4 hover:cursor-pointer hover:scale-102 transition duration-500 ease-in-out'>View Projects</button>
                        <button className='bg-[#3b82f6] text-white rounded-lg px-4 py-3 hover:cursor-pointer hover:scale-102 transition duration-500 ease-in-out'>Download CV</button>
                    </div>
                </div>
            </main>           
        </div>
        </>
    )
}

export default Hero