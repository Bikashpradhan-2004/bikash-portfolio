"use client";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const ActionButtons = ({ live, github }) => {
  return (
    <div className="flex items-center gap-4 relative">
      <div data-tooltip-id="live-project" className="relative">
        <Link
          href={live}
          target="_blank"
          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer hover:bg-white/10 transition-all"
        >
          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-colors" />
        </Link>
      </div>
      <Tooltip
        id="live-project"
        place="top"
        content="Live project"
        className="!bg-black/50 !rounded-md"
      />
      {github && (
        <>
          <div data-tooltip-id="github-repo" className="relative">
            <Link
              href={github}
              target="_blank"
              className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer hover:bg-white/10 transition-all"
            >
              <BsGithub className="text-white text-3xl group-hover:text-accent transition-colors" />{" "}
            </Link>
          </div>
          <Tooltip
            id="github-repo"
            place="top"
            content="Github repository"
            className="!bg-black/50 !rounded-md"
          />
        </>
      )}
    </div>
  );
};
export default ActionButtons;
