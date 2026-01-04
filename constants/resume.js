import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiSupabaseFill } from "react-icons/ri";
import { TbBrandTypescript, TbBrandCpp } from "react-icons/tb";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSap,
  SiDrizzle,
  SiShadcnui,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const ABOUT = {
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

export const EXPERIENCES = {
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

export const EDUCATION = {
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

export const SKILLS = {
  title: "My skills",
  description:
    "I'm a web developer passionate about creating Next.js, React, TypeScript, and Tailwind CSS applications with strong SEO. I enjoy building responsive, scalable websites and collaborating in agile teams to deliver smooth, high-quality user experiences.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5", id: "html5" },
    { icon: <FaCss3 />, name: "CSS3", id: "css3" },
    { icon: <FaJs />, name: "JavaScript", id: "javascript" },
    { icon: <FaReact />, name: "React", id: "react" },
    { icon: <SiNextdotjs />, name: "Next.js", id: "nextjs" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", id: "tailwindcss" },
    { icon: <FaNodeJs />, name: "Node.js", id: "nodejs" },
    { icon: <TbBrandTypescript />, name: "Type Script", id: "typescript" },
    { icon: <GrMysql />, name: "My SQL", id: "mysql" },
    { icon: <TbBrandCpp />, name: "C++", id: "cpp" },
    { icon: <SiSap />, name: "Sap ABAP", id: "sapabap" },
    { icon: <FaFigma />, name: "Figma", id: "figma" },
    { icon: <FaGitAlt />, name: "Git", id: "git" },
    { icon: <FaGithub />, name: "GitHub", id: "github" },
    { icon: <FaGitlab />, name: "GitLab", id: "gitlab" },
    { icon: <VscVscodeInsiders />, name: "VS Code", id: "vscode" },
    { icon: <SiDrizzle />, name: "Drizzle ORM", id: "drizzle" },
    { icon: <RiSupabaseFill />, name: "Supabase", id: "supabase" },
    { icon: <SiShadcnui />, name: "Shadcn UI", id: "shadcnui" },
  ],
};
