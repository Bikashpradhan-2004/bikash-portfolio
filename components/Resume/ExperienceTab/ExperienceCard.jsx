const ExperienceCard = ({ item, type = "experience" }) => {
  const titleKey = type === "experience" ? "position" : "degree";
  const companyKey = type === "experience" ? "company" : "institution";

  return (
    <li className="bg-[#232329] h[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1">
      <span className="text-accent">{item.duration}</span>
      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
        {item[titleKey]}
      </h3>
      <div className="flex items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{item[companyKey]}</p>
      </div>
    </li>
  );
};

export default ExperienceCard;
