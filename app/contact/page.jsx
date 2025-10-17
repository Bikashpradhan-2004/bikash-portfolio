"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import { CONTACT_INFO } from "@/constants/contact";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="flex-1 order-2 xl:order-none">
            <ContactForm />
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ContactInfo info={CONTACT_INFO} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
