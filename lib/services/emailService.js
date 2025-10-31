import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/constants/contact";

export const sendEmail = async (formRef) => {
  try {
    const response = await emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      formRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.text || error.message };
  }
};

export const validateEmailConfig = () => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn(
      "EmailJS configuration is incomplete. Please check your environment variables."
    );
    return false;
  }

  return true;
};
