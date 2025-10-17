import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import { EMAILJS_CONFIG } from "@/constants/contact";

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

const ContactForm = () => {
  const form = useRef();
  const [service, setService] = useState("");

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
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          form.current,
          EMAILJS_CONFIG.PUBLIC_KEY
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
    <form
      ref={form}
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
    >
      <FormHeader
        title="Let's work together"
        description="Feel free to reach out for collaborations or just a friendly chat."
      />
      <FormInputs formik={formik} service={service} setService={setService} />
      <Button type="submit" className="mt-4 w-full md:w-auto cursor-pointer">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
