// src/components/SkillsSection.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiGit, SiGithub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SkillsCategory from "./SkillsCategory";

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
    { icon: SiMongodb, name: "MongoDB" },
  ];

  const tools = [
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "GitHub" },
    { icon: VscVscode, name: "VSCode" },
  ];

  return (
    <section className="py-4 max-w-6xl mx-auto">
      <h1 className="text-3xl text-center font-bold mb-8">Skills</h1>

      <SkillsCategory title="Frontend" skills={frontendSkills} />
      <SkillsCategory title="Backend" skills={backendSkills} />
      <SkillsCategory title="Tools" skills={tools} />
    </section>
  );
};

export default Skills;
