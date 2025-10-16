"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
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
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+91 83398 13428" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mail@bikashcodes.online",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bhubaneswer, Odisha",
  },
];

const Contact = () => {
  const form = useRef();
  const [service, setService] = useState("");

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    service: Yup.string().required("Please select a service"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      service: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          "service_q02bwlp",
          "template_edsfbv3",
          form.current,
          "cMHZLgUHEYbyqTh7z"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            resetForm();
            setService("");
          },
          (error) => {
            console.error("Email send error:", error.text);
            alert("Failed to send message. Please try again.");
          }
        );
    },
  });

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
            <form
              ref={form}
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl md:text-4xl text-accent font-semibold">
                Let's work together
              </h3>
              <p className="text-white/60 text-sm md:text-base">
                Feel free to reach out for collaborations or just a friendly
                chat.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    className="w-full"
                  />
                  {formik.touched.firstname && formik.errors.firstname && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.firstname}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    className="w-full"
                  />
                  {formik.touched.lastname && formik.errors.lastname && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.lastname}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="w-full"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>
                <div className="col-span-1 md:col-span-2 w-full">
                  <Select
                    onValueChange={(value) => {
                      setService(value);
                      formik.setFieldValue("service", value);
                    }}
                    value={service}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="Frontend Development (React/Next.js)">
                          Frontend Development (React/Next.js)
                        </SelectItem>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="Full Stack Development">
                          Full Stack Development
                        </SelectItem>
                        <SelectItem value="Database Design & SQL">
                          Database Design & SQL
                        </SelectItem>
                        <SelectItem value="Software Development (C/C++)">
                          Software Development (C/C++)
                        </SelectItem>
                        <SelectItem value="SAP ABAP Development">
                          SAP ABAP Development
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {formik.touched.service && formik.errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.service}
                    </p>
                  )}
                  <Textarea
                    name="message"
                    className="h-[200px] mt-4 w-full"
                    placeholder="Type your message here."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="mt-4 w-full md:w-auto cursor-pointer"
              >
                Send Message
              </Button>
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
