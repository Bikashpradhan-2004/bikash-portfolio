import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import { EMAILJS_CONFIG } from "@/constants/contact";
import toast, { Toaster } from "react-hot-toast";
import { SiTicktick } from "react-icons/si";

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
      const loadingToast = toast.loading("Sending your message...");

      emailjs
        .sendForm(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          form.current,
          EMAILJS_CONFIG.PUBLIC_KEY
        )
        .then(
          () => {
            toast.dismiss(loadingToast);
            toast.success("Message sent successfully!", {
              duration: 4000,
              icon: <SiTicktick />,
            });
            resetForm();
            setService("");
          },
          (error) => {
            toast.dismiss(loadingToast);
            console.error("Email send error:", error.text);
            toast.error("Failed to send message. Please try again.", {
              duration: 4000,
            });
          }
        );
    },
  });

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#27272c",
            color: "#fff",
            border: "1px solid #3f3f46",
          },
          success: {
            style: {
              background: "#10b981",
            },
          },
          error: {
            style: {
              background: "#ef4444",
            },
          },
          loading: {
            style: {
              background: "#27272c",
            },
          },
        }}
      />
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
    </>
  );
};

export default ContactForm;
