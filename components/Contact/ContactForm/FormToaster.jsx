import { Toaster } from "react-hot-toast";

export const FormToaster = () => (
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
);
