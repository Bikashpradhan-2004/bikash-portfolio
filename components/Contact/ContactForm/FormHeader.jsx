const FormHeader = ({ title, description }) => {
  return (
    <>
      <h3 className="text-3xl md:text-4xl text-accent font-semibold">
        {title}
      </h3>
      <p className="text-white/60 text-sm md:text-base">{description}</p>
    </>
  );
};

export default FormHeader;
