import { FormToaster } from "./FormToaster";
import { SubmitButton } from "./SubmitButton";
import FormHeader from "./FormHeader";
import FormInputs from "./FormInputs";
import { useContactForm } from "@/hooks/useContactForm";
import {
  contactFormSchema,
  initialFormValues,
} from "@/lib/validations/contactSchema";
import { FORM_CONFIG } from "@/constants/contact";

const ContactForm = () => {
  const { form, service, setService, formik } = useContactForm(
    contactFormSchema,
    initialFormValues
  );

  return (
    <>
      <FormToaster />
      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
      >
        <FormHeader
          title={FORM_CONFIG.TITLE}
          description={FORM_CONFIG.DESCRIPTION}
        />
        <FormInputs formik={formik} service={service} setService={setService} />
        <SubmitButton isSubmitting={formik.isSubmitting} />
      </form>
    </>
  );
};

export default ContactForm;
