

const SkillCard = ({ icon: Icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:shadow-md hover:shadow-blue-500 hover:scale-105 transition duration-500 ease-in-out border-1 border-blue-500">
      <Icon size={65} className="text-blue-500" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default SkillCard;
