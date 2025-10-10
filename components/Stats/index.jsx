"use client";
import CountUp from "react-countup";

const stats = [
  { number: 100, text: "Years of experience" },
  { number: 200, text: "Projects completed" },
  { number: 300, text: "Technologies mastered" },
  { number: 400, text: "Code commits" },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl-max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-cente xl:justify-start"
                key={index}
              >
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
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
