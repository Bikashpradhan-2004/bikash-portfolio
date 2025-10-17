const InfoCard = ({ icon: Icon, title, description }) => {
  return (
    <li className="flex items-center gap-6">
      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
        <div className="text-[28px]">
          <Icon />
        </div>
      </div>
      <div className="flex-1">
        <p className="text-white/60">{title}</p>
        <h3 className="text-sm md:text-xl">{description}</h3>
      </div>
    </li>
  );
};

export default InfoCard;
