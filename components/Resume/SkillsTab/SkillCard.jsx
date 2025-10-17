import { Tooltip } from "react-tooltip";

const SkillCard = ({ id, name, icon }) => {
  return (
    <div className="relative">
      <div data-tooltip-id={id}>
        <div className="w-full h-[150px] flex justify-center items-center p-6 bg-[#232329] rounded-xl group">
          <div className="text-6xl group-hover:text-accent transition-all duration-300">
            {icon}
          </div>
        </div>
      </div>
      <Tooltip
        id={id}
        place="top"
        content={name}
        className="!bg-black/50 !rounded-md"
      />
    </div>
  );
};

export default SkillCard;
