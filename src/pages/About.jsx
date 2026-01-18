import Presec from '../assets/Presec-legon.jpg'
import KnustLogo from '../assets/knust.jpg'

function About() {
    return (
        <>
            <div id="about" className="text-center max-w-6xl mx-auto font-light scroll-mt-20">
                {/* About Me */}
                <h1 className="text-2xl md:text-4xl font-semibold mb-2 py-8">About Me</h1>

                <p className="text-md text-[#94a3b8] mb-4">
                    I’m Emmanuel Teye Lartey, a full-stack developer with a strong interest in crafting
                    modern, user-friendly web experiences. While I’m capable of developing end-to-end
                    applications, I’m currently focused on sharpening my frontend skills—especially
                    building dynamic interfaces with <span className="font-semibold">React</span> and related tools.
                    My goal is to deliver clean, scalable, and visually engaging solutions that make a
                    lasting impact.
                </p>

                <p className="text-md text-[#94a3b8] mb-4">
                    I have hands-on experience working in professional environments, including my internship at the
                    <span className="font-semibold"> Ghana National Petroleum Corporation (GNPC)</span> where I served as an
                    <span className="font-semibold"> IT Support</span> personnel — providing technical assistance, maintaining systems,
                    and ensuring smooth IT operations.
                </p>

                <p className="text-md text-[#94a3b8] mb-4">
                    I also completed my national service at the
                    <span className="font-semibold"> Ministry of Finance</span>, where I contributed to Sustainable Development Goals
                    (SDG) related projects. This role deepened my experience in data-driven applications and collaborative problem-solving,
                    bridging technology with national development efforts.
                </p>

                <p className="text-md text-[#94a3b8] mb-6">
                    If you’re looking for someone who blends technical expertise with a creative mindset, let’s connect!
                </p>

                {/* Education Section */}
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 py-8">Education</h2>
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
                                Completed Secondary education with a 
                                strong academic foundation in science and problem-solving.
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
