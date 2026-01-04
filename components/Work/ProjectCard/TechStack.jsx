const TechStack = ({ stack }) => {
  return (
    <ul className="flex gap-2 md:gap-4">
      {stack.map((item, index) => (
        <li key={index} className="text-xs md:text-xl text-accent">
          {item.name}
          {index !== stack.length - 1 && ","}
        </li>
      ))}
    </ul>
  );
};

export default TechStack;
