// src/components/SkillsCategory.jsx
import SkillCard from "./SkillCard";

const SkillsCategory = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl text-center text-[#94a3b8] font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default SkillsCategory;
