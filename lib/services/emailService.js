import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export const sendEmail = async (formRef) => {
  try {
    const response = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.text || error.message };
  }
};

export const validateEmailConfig = () => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn(
      "EmailJS configuration is incomplete. Please check your environment variables."
    );
    return false;
  }
  return true;
};
