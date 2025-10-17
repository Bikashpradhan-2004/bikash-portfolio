import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsNavigation = () => {
  const tabs = ["experience", "education", "skills", "about"];

  return (
    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
      <TabsTrigger value="experience">Experience</TabsTrigger>
      <TabsTrigger value="education">Education</TabsTrigger>
      <TabsTrigger value="skills">Skills</TabsTrigger>
      <TabsTrigger value="about">About Me</TabsTrigger>
    </TabsList>
  );
};

export default TabsNavigation;
