import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 8;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              delay: reverseIndex(index) * 0.08,
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
};
export default Stairs;
