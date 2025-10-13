"use client";
import CountUp from "react-countup";

const stats = [
  { number: 8, text: "months of experience" },
  { number: 13, text: "Technologies known" },
  { number: 160, text: "Code commits" },
  { number: 270, text: "Leetcode Problems" },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2 md:gap-4 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <div className="flex">
                  <CountUp
                    end={stat.number}
                    duration={5}
                    delay={2}
                    className="text-2xl md:text-4xl xl:text-6xl font-extrabold"
                  />
                  <p className="text-xl md:text-2xl xl:text-4xl font-extrabold ml-1 my-auto">
                    +
                  </p>
                </div>
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-sm lg:text-base`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
