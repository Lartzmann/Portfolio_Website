import ProjectCard from "../components/ProjectCard";
import ProjectImg3 from "../assets/Todo_UI.png"
import ProjectImg1 from "../assets/advice_thumb.png"
import ProjectImg2 from "../assets/age_thumb.png"
import ComingSoonImg from "../assets/coming-soon.jpg"
import ProjectImg4 from "../assets/music-store.png"

const Projects = () => {
  const projects = [

    {
      image: ProjectImg1,
      title: "Advice Generator App",
      description:
        "A simple advice Generator that fetches random advice from Advice.slip API. Built with HTML, CSS and javascript to deliver a clean, responsive, and interactive user experience.",
      demoLink: "https://advice-generator-app-main-lartzmanns-projects.vercel.app/",
      codeLink: "#",
    },
    {
      image: ProjectImg2,
      title: "Age Calculator App",
      description:
        "A responsive Age Calculator built with HTML, CSS, and JavaScript. It validates user input and calculates age precisely, reinforcing my skills in date handling and front-end logic.",
      demoLink: "https://age-calculator-app-main-lartzmanns-projects.vercel.app/",
      codeLink: "#",
    },
    {
      image: ProjectImg3,
      title: "Todo App",
      description:
        "A sleek and responsive task manager built with React, Vite, and Tailwind CSS. It stores data using local storage, ensuring tasks persist even after page reloads. This project was designed to demonstrate my ability to manage React state efficiently while building a smooth, real-world user experience focused on clean UI and usability.",
      demoLink: "https://todo-app-lartzmanns-projects.vercel.app/",
      codeLink: "#",
    },    
    {
      image: ProjectImg4,
      title: "Music Store(Thomann clone)",
      description:
        "An e-commerce web application inspired by platforms like Thomann, built with React, Vite, and Tailwind CSS to showcase and sell musical instruments and studio equipment. Focused on clean UI, product browsing efficiency, and a real-world store experience — with features like categorized product listings, responsive design, and a seamless user shopping flow",
      demoLink: "https://music-store-lartzmanns-projects.vercel.app/",
      codeLink: "#",
    },    
    {
      image: ComingSoonImg,
      title: "Lit Caterer – Coming Soon",
      description:
        "Lit Caterer is a food vendor management platform designed to connect users with a nearby vendor seamlessly. Built with React, Vite, and Tailwind CSS, it focuses on smooth ordering experiences, mobile responsiveness, and clean UI. The project is currently in development — stay tuned!",
      // demoLink: "#",
      codeLink: "#",
    },

    // {
    // //   image: ProjectImg,
    //   title: "Project 4",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   demoLink: "#",
    //   codeLink: "#",
    // },
    // {
    // //   image: ProjectImg,
    //   title: "Project 5",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   demoLink: "#",
    //   codeLink: "#",
    // },
  ];

  return (
    <div id="projects" className="py-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
