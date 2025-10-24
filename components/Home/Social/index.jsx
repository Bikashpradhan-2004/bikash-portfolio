import Link from "next/link";
import { SOCIALS } from "@/constants/home";

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {SOCIALS.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className={iconStyles}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
