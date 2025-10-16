import ActionButtons from "../ActionButtons";
import TechStack from "../TechStack";

const ProjectCard = ({ num, category, description, stack, live, github }) => {
  return (
    <div className="flex flex-col gap-[30px] h-[50%]">
      <div className="text-6xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
        {num}
      </div>
      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
        {category} website
      </h2>
      <p className="text-white/60">{description}</p>
      <TechStack stack={stack} />
      <div className="border border-white/20"></div>
      <ActionButtons live={live} github={github} />
    </div>
  );
};

export default ProjectCard;
