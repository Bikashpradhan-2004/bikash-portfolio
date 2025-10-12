"use client";
import { TypeAnimation } from "react-type-animation";

const TextTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={["Bikash Kumar Pradhan", 3000, "", 500]}
      speed={50}
      repeat={Infinity}
      style={{ display: "inline-block" }}
      className="text-xl md:text-6xl"
    />
  );
};

export default TextTypeAnimation;
