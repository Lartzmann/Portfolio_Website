import HeroImg from "../assets/Lartzmann.jpg";


function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto h-vh lg:h-dvh">
        {/* Hero Section */}
        <main className="w-full lg:w-[60%] mx-auto  py-15">
          <div className="flex justify-center ">
            <img
              src={HeroImg}
              alt="Hero Image"
              className="w-50 h-65 rounded-full mb-8 animate-fade-in-up [animation-delay:200ms]"
            />
          </div>
          <div className="mb-8 text-center">
            <h1 className="text-[2rem] sm:text-[2.5rem] font-semibold animate-fade-in-up [animation-delay:400ms]">
              Hi, I'm Emmanuel
            </h1>
            <p className="text-md sm:text-xl text-[#94a3b8] animate-fade-in-up [animation-delay:600ms]">
              Software Engineer | Web Development
            </p>
          </div>
          <div className="flex justify-center animate-fade-in-up [animation-delay:800ms]">
            <div className="flex flex-col w-full sm:w-[80%] ">
              {/* View projects Button */}              
              <a 
              href="#projects"
              className="px-4 py-3 bg-white text-black text-center rounded-lg mb-4 hover:cursor-pointer hover:scale-102 transition duration-500 ease-in-out">
                View Projects
              </a>
              {/* Download CV Button */}
              <a
                href="/CV-LinkedIn-Emmanuel.docx"
                download="CV-LinkedIn-Emmanuel.docx"
                className="bg-[#3b82f6] text-white text-center rounded-lg px-4 py-3 hover:cursor-pointer hover:scale-102 transition duration-500 ease-in-out"
              >
                Download CV
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Hero;
