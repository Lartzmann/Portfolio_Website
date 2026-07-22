// src/components/SkillsSection.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql, SiGit, SiGithub, SiFigma, SiPrisma   } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SkillsCategory from "../components/SkillsCategory";

const Skills = () => {
  const frontendSkills = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiPrisma , name: "Prisma" },
  ];

  const tools = [
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "GitHub" },
    { icon: VscVscode, name: "VSCode" },
    { icon: SiFigma , name: "Figma" },
  ];

  return (
    <div id="skills" className="py-4 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-8">Skills</h1>

      <SkillsCategory title="Frontend" skills={frontendSkills} />
      <SkillsCategory title="Backend & DB" skills={backendSkills} />
      <SkillsCategory title="Tools" skills={tools} />
    </div>
  );
};

export default Skills;
