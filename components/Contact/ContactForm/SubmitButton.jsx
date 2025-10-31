import { Button } from "@/components/ui/button";

export const SubmitButton = ({ isSubmitting, children = "Send Message" }) => (
  <Button
    type="submit"
    disabled={isSubmitting}
    className="mt-4 w-full md:w-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? "Sending..." : children}
  </Button>
);
