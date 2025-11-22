import { useRef, useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { SiTicktick } from "react-icons/si";
import { sendEmail } from "@/lib/services/emailService";
import { FORM_MESSAGES } from "@/constants/contact";

export const useContactForm = (validationSchema, initialValues) => {
  const form = useRef();
  const [service, setService] = useState("");

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    const loadingToast = toast.loading(FORM_MESSAGES.LOADING);

    try {
      const result = await sendEmail(form);

      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success(FORM_MESSAGES.SUCCESS, {
          duration: 4000,
          icon: <SiTicktick />,
        });
        resetForm();
        setService("");
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Email send error:", error);
      toast.error(FORM_MESSAGES.ERROR, {
        duration: 4000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return {
    form,
    service,
    setService,
    formik,
  };
};
