const AboutTab = ({ about }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold text-center xl:text-left">
        {about.title}
      </h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
        {about.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
        {about.info.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center xl:justify-start gap-4"
          >
            <span className="text-white/60">{item.fieldName}:</span>
            <span className="text-sm">{item.fieldValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTab;
