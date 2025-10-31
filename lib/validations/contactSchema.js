import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  service: Yup.string().required("Please select a service"),
});

export const initialFormValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
  service: "",
};
