import SkillCard from "./SkillCard";

const SkillsTab = ({ skills }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
          {skills.description}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skillList.map(({ id, name, icon }) => (
          <SkillCard key={id} id={id} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;
