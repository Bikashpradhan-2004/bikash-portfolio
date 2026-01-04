import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const CONTACT_INFO = [
  { icon: FaPhoneAlt, title: "Phone", description: "+91 83398 13428" },
  {
    icon: FaEnvelope,
    title: "Email",
    description: "mail@bikashcodes.online",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    description: "Bhubaneswer, Odisha",
  },
];

export const SERVICE_OPTIONS = [
  "Frontend Development (React/Next.js)",
  "Web Development",
  "Full Stack Development",
  "Database Design & SQL",
  "Software Development (C/C++)",
  "SAP ABAP Development",
];

export const FORM_MESSAGES = {
  LOADING: "Sending your message...",
  SUCCESS: "Message sent successfully!",
  ERROR: "Failed to send message. Please try again.",
};

export const FORM_CONFIG = {
  TITLE: "Let's work together",
  DESCRIPTION:
    "Feel free to reach out for collaborations or just a friendly chat.",
};
