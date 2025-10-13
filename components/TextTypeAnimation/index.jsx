"use client";
import { TypeAnimation } from "react-type-animation";

const TextTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={["", 2000, "Bikash Kumar Pradhan", 3000]}
      speed={20}
      repeat={Infinity}
      style={{ display: "inline-block" }}
    />
  );
};

export default TextTypeAnimation;
