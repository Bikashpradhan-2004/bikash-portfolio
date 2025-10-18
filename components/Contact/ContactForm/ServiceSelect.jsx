import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICE_OPTIONS } from "@/constants/contact";

const ServiceSelect = ({ formik, service, setService }) => {
  return (
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
            {SERVICE_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {formik.touched.service && formik.errors.service && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.service}</p>
      )}
    </div>
  );
};

export default ServiceSelect;
