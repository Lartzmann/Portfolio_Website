import ProjectCard from "./ProjectCard";
// import ProjectImg from "../assets/project-placeholder.jpg"; // replace with real project images

const Projects = () => {
  const projects = [
    {
    //   image: ProjectImg,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demoLink: "#",
      codeLink: "#",
    },
    {
    //   image: ProjectImg,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demoLink: "#",
      codeLink: "#",
    },
    {
    //   image: ProjectImg,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demoLink: "#",
      codeLink: "#",
    },
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
