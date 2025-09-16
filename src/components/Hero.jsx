import HeroImg from '../assets/Lartzmann.jpg'

function Hero() {
    return(
        <>
        <div className='h-dvh'>
            <div className="flex justify-between py-4 mb-8">
                <h1 className="font-bold text-[2.5rem]">Lo<span className='text-[#94a3b8]'>go</span></h1>
                <nav className='hidden'>
                    <ul>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact</li>
                        <li>About Me</li>
                    </ul>
                </nav>
                <button className="text-2xl">☰</button>
            </div>
            <main>
                <div className='flex justify-center'>
                    <img src={HeroImg} alt="Hero Image" className='w-50 h-60 rounded-full mb-8' />
                </div>
                <div className='mb-8 text-center'>
                    <h1 className='text-[2rem] font-bold'>Hi, I'm Emmanuel</h1>
                    <p className=' text-lg text-[#94a3b8]'>Full Stack Developer | React Enthusiast  </p>
                </div>
                <div className='flex flex-col justify-center w-full lg:w-[40%]'>
                    <button className='px-4 py-2 bg-white text-black rounded-lg mb-4'>View Projects</button>
                    <button className='bg-[#3b82f6] text-white rounded-lg px-4 py-2'>Download CV</button>
                </div>
            </main>           
        </div>
        </>
    )
}

export default Hero