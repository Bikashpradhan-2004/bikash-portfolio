"use client";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import TabsNavigation from "@/components/Resume/TabsNavigation";
import EducationTab from "@/components/Resume/EducationTab";
import SkillsTab from "@/components/Resume/SkillsTab";
import AboutTab from "@/components/Resume/AboutTab";
import { ABOUT, EXPERIENCES, EDUCATION, SKILLS } from "@/constants/resume";
import ExperienceTab from "@/components/Resume/ExperienceTab";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.7, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h[80vh] flex items-center justify-center my-4 mx-auto"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsNavigation />
          <div className="min-h-[70vh] w-full ml-0 xl:ml-[60px] mt-8 xl:mt-0">
            <TabsContent value="experience" className="w-full">
              <ExperienceTab experiences={EXPERIENCES} />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <EducationTab education={EDUCATION} />
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <SkillsTab skills={SKILLS} />
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <AboutTab about={ABOUT} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
