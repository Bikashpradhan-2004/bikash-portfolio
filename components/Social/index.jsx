import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, url: "https://github.com/", label: "GitHub" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com/", label: "LinkedIn" },
  { icon: <FaYoutube />, url: "https://youtube.com/", label: "YouTube" },
  { icon: <FaTwitter />, url: "https://twitter.com/", label: "Twitter" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
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
