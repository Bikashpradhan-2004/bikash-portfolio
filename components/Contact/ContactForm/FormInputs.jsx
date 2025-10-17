import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ServiceSelect from "./ServiceSelect";

const FormInputs = ({ formik, service, setService }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-full">
        <Input
          type="text"
          name="firstname"
          placeholder="Firstname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
          className="w-full"
        />
        {formik.touched.firstname && formik.errors.firstname && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.firstname}</p>
        )}
      </div>

      <div className="w-full">
        <Input
          type="text"
          name="lastname"
          placeholder="Lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
          className="w-full"
        />
        {formik.touched.lastname && formik.errors.lastname && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.lastname}</p>
        )}
      </div>

      <div className="w-full">
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      <div className="w-full">
        <Input
          type="tel"
          name="phone"
          placeholder="Phone number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="w-full"
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
        )}
      </div>

      <ServiceSelect
        formik={formik}
        service={service}
        setService={setService}
      />

      <div className="col-span-1 md:col-span-2 w-full">
        <Textarea
          name="message"
          className="h-[200px] w-full"
          placeholder="Type your message here."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
        )}
      </div>
    </div>
  );
};

export default FormInputs;
