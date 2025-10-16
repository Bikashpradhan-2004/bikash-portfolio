"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/Work/ProjectCard";
import ProjectGallery from "@/components/Work/ProjectGallery";
import { PROJECTS } from "@/constants/projects";

export default function Work() {
  const [project, setProject] = useState(PROJECTS[0]);

  const handleSlideChange = (index) => {
    setProject(PROJECTS[index]);
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
            <ProjectCard {...project} />
          </div>
          <div className="w-full xl:w-[50%]">
            <ProjectGallery
              projects={PROJECTS}
              onSlideChange={handleSlideChange}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
