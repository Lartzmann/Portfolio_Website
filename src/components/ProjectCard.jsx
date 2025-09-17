const ProjectCard = ({ image, title, description, demoLink, codeLink }) => {
  return (
    <div className="shadow-md rounded-md overflow-hidden flex flex-col max-w-sm">
      <img src={image} alt={title} className="w-full bg-[#3f4c60] h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-lg font-light text-[#94a3b8] mb-4 flex-1">
          {description}
        </p>
        <div className="flex gap-4 mt-auto">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg text-sm hover:bg-[#2563eb]"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#26344b] text-white rounded-lg text-sm hover:bg-[#1a2333]"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
