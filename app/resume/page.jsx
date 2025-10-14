"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { TbBrandTypescript, TbBrandCpp } from "react-icons/tb";
import { SiTailwindcss, SiNextdotjs, SiSap } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const about = {
  title: "About Me",
  description:
    "Coming from a non-CS background, my curiosity and eagerness to learn helped me quickly gain hands-on experience in web development. Through internships, I worked with Next.js, React, Tailwind CSS, TypeScript, and CMS, building responsive and scalable applications. I thrive on tackling real-world challenges, learning new technologies rapidly, and delivering high-quality solutions. I am passionate about contributing to innovative teams and continuously growing my skills.",
  info: [
    { fieldName: "Name", fieldValue: "Bikash Kumar Pradhan" },
    { fieldName: "Phone", fieldValue: "+91 83398 13428" },
    { fieldName: "Experience", fieldValue: "8+ months" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "mail@bikashcodes.online" },
    { fieldName: "Address", fieldValue: "Bhubaneswar, Odisha, India" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi, Odia" },
    { fieldName: "Soft Skills", fieldValue: "Problem-solving, Teamwork" },
  ],
};

const experiences = {
  title: "My experience",
  description:
    "Through my internship at Edubiz Networks, I gained hands-on experience in full-stack web development, strengthened my skills in Next.js, Tailwind CSS, and TypeScript, and improved my understanding of scalable design, API integration, and performance optimization while learning to collaborate effectively in an agile, team-driven environment.",
  items: [
    {
      company: "Edubiz Networks",
      position: "Full stack Developer Intern",
      duration: "Jun,2025 - Present",
    },
    {
      company: "Edubiz Networks",
      position: "Web Developer Intern",
      duration: "Mar,2025 - May,2025",
    },
  ],
};

const education = {
  title: "My education",
  description:
    "With a strong foundation in mathematics and a passion for technology, I apply analytical and problem-solving skills to develop efficient, data-driven solutions. My understanding of algorithms and programming, strengthened by mathematical reasoning, enables me to bridge theory and real-world applications through innovative and intelligent software development.",
  items: [
    {
      institution: "Odisha University of Technology & Research (OUTR)",
      degree: "MCA",
      duration: "2024 - 2026",
    },
    {
      institution: "Science College (Autonomous) HINJILICUT",
      degree: "Bsc Mathematics",
      duration: "2021 - 2024",
    },
    {
      institution: "Science H S School HINJILICUT",
      degree: "Intermediate",
      duration: "2019 - 2021",
    },
    {
      institution: "Panchayat H School DHINKISALA",
      degree: "Matric",
      duration: "2018 - 2019",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I’m a web developer passionate about creating Next.js, React, TypeScript, and Tailwind CSS applications with strong SEO. I enjoy building responsive, scalable websites and collaborating in agile teams to deliver smooth, high-quality user experiences.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5", id: "html5" },
    { icon: <FaCss3 />, name: "CSS3", id: "css3" },
    { icon: <FaJs />, name: "JavaScript", id: "javascript" },
    { icon: <FaReact />, name: "React", id: "react" },
    { icon: <SiNextdotjs />, name: "Next.js", id: "nextjs" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", id: "tailwindcss" },
    { icon: <FaNodeJs />, name: "Node.js", id: "nodejs" },
    { icon: <FaFigma />, name: "Figma", id: "figma" },
    { icon: <TbBrandTypescript />, name: "Type Script", id: "typescript" },
    { icon: <GrMysql />, name: "My SQL", id: "mysql" },
    { icon: <TbBrandCpp />, name: "C++", id: "cpp" },
    { icon: <SiSap />, name: "Sap ABAP", id: "sapabap" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, dilay: 0.4, ease: "easeIn" },
      }}
      className="min-h[80vh] flex items-center justify-center my-4 mx-auto"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row dap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ml-0 xl:ml-[60px] mt-8 xl:mt-0">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
                    {skills.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map(({ id, name, icon }) => {
                    return (
                      <div className="relative" key={id}>
                        <div data-tooltip-id={id}>
                          <div className="w-full h-[150px] flex justify-center items-center p-6 bg-[#232329] rounded-xl group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {icon}
                            </div>
                          </div>
                        </div>
                        <Tooltip id={id} place="top" content={name} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-sm">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
