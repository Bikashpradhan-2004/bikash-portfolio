import InfoCard from "./InfoCard";

const ContactInfo = ({ info }) => {
  return (
    <ul className="flex flex-col gap-10">
      {info.map((item, index) => (
        <InfoCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default ContactInfo;
