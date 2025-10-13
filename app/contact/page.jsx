"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 321 654 876",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contact@example.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "123 Main Street, City, Country",
  },
];

const Contact = () => {
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
            <form className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl md:text-4xl text-accent font-semibold">
                Let's work together
              </h3>
              <p className="text-white/60 text-sm md:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                nihil sapiente pariatur id totam.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="tel" placeholder="Phone number" />
                <div className="col-span-1 md:col-span-2">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                        <SelectItem value="logo">Logo Design</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Textarea
                    className="h-[200px] mt-4"
                    placeholder="Type your message here."
                  ></Textarea>
                </div>
              </div>

              <Button className="mt-4 w-full md:w-auto">Send Message</Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-sm md:text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
