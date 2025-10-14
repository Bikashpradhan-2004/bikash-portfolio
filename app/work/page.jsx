"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Portfolio",
    title: "project 1",
    description:
      "A modern portfolio showcasing my projects, skills, and experience as a passionate full-stack web developer.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "Javascript" },
    ],
    image: "/websides/Portfolio.png",
    live: "https://www.bikashcodes.online/",
    github: "https://github.com/Bikashpradhan-2004/bikash-portfolio",
  },
  {
    num: "02",
    category: "EdubizNetworks",
    title: "project 2",
    description:
      "EduBiz Networks empowers the education sector with franchising, consulting, marketing, and growth solutions, connecting educators, learners, and businesses for sustainable impact.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "Typescript" },
    ],
    image: "/websides/EdubizNetworks.png",
    live: "https://edubiznetworks.com/",
    github: "",
  },
  {
    num: "03",
    category: "fransell",
    title: "project 3",
    description:
      "Fransell by EduBiz Networks helps education businesses expand through complete, end-to-end franchising solutions with strategic, operational, and marketing support",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "Typescript" },
    ],
    image: "/websides/fransell.png",
    live: "https://fransell.edubiznetworks.com/",
    github: "",
  },
  {
    num: "04",
    category: "Talenza",
    title: "project 4",
    description:
      "Talenza by EduBiz Networks lets students showcase talents via short videos, gain recognition, and be featured on our website and YouTube channel.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "Typescript" },
    ],
    image: "/websides/Talenza.png",
    live: "https://talenza.netlify.app/",
    github: "",
  },
  {
    num: "05",
    category: "Boostup",
    title: "project 5",
    description:
      "BoostUp by EduBiz Networks offers smart marketing solutions for educational brands, enhancing growth, reducing costs, and increasing visibility for schools and institutes.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "Typescript" },
    ],
    image: "/websides/Boostup.png",
    live: "https://boostup.edubiznetworks.com/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[88vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} website
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-2 md:gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="md:text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
