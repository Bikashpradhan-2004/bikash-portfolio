import { ScrollArea } from "@/components/ui/scroll-area";
import ExperienceCard from "./ExperienceCard";

const ExperienceTab = ({ experiences }) => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experiences.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
        {experiences.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experiences.items.map((item, index) => (
            <ExperienceCard key={index} item={item} type="experience" />
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ExperienceTab;
