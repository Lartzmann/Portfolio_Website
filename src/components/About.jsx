
// import Presec from '../assets/Presec.jpeg'
import Presec from '../assets/Presec-legon.jpg'
import KnustLogo from '../assets/knust.jpg'

// export default About
function About() {
    return (
        <>
            <div id="about" className="text-center max-w-6xl mx-auto font-light scroll-mt-20">
                {/* About Me */}
                <h1 className="text-3xl font-semibold mb-2">About Me</h1>
                <p className="text-lg md:text-md text-[#94a3b8]">
                    I’m Emmanuel Teye Lartey, a full-stack developer passionate about building
                    modern, user-friendly web applications. My goal is to create scalable
                    solutions that combine clean design with efficient code.             
                </p>
                <p className="text-lg md:text-md text-[#94a3b8] mb-4">
                    With a strong foundation in <span className="font-semibold">React</span> and 
                    <span className="font-semibold"> Node.js</span>, I enjoy turning complex problems 
                    into simple, elegant solutions. Beyond code, I believe in creating digital experiences 
                    that <em>delight users</em> while driving real business results.
                </p>
                <p className="text-lg md:text-md text-[#94a3b8] mb-12">
                    Currently, I’m sharpening my backend skills and exploring advanced API integrations — 
                    always with the goal of delivering impactful products. If you’re looking for someone 
                    who blends technical expertise with a creative mindset, let’s connect!
                </p>

                {/* Education Section */}
                <h2 className="text-2xl font-semibold mb-6">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div>
                        <img 
                            src={Presec}
                            alt="PRESEC" 
                            className="w-full h-55 object-cover"
                        />
                        <div className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2">Presbyterian Boys' Secondary School</h3>
                            <p className="text-[#94a3b8] mb-4">
                                2017-2020
                            </p>
                            <p className="text-[#94a3b8]">
                                Majored in General Science with Biology
                            </p>
                        </div>
                    </div>                   

                    {/* Card 2 */}
                    <div>
                        <img 
                            src={KnustLogo} 
                            alt="KNUST" 
                            className="w-full h-55 object-cover"
                        />
                        <div className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2">BSc. Computer Science</h3>
                            <p className="text-[#94a3b8] mb-4">
                                2020-2024
                            </p>
                            <p className="text-[#94a3b8]">
                                Graduated from KNUST, where I built a strong foundation 
                                in programming, algorithms, and software engineering principles.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
