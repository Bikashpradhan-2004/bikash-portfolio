import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Bikashpradhan-2004",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/pradhanbikash/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://x.com/BikashK83627301",
    label: "Twitter",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/bikash.kumar2003/",
    label: "Instagram",
  },
  {
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/BikashKumarPradhan/",
    lebel: "LeetCode",
  },
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
