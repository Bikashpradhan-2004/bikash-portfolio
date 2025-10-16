import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ActionButtons = ({ live, github }) => {
  return (
    <div className="flex items-center gap-4">
      <Link href={live} target="_blank">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
              <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Live project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      {github && (
        <Link href={github} target="_blank">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                <BsGithub className="text-white text-3xl group-hover:text-accent" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Github repository</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      )}
    </div>
  );
};

export default ActionButtons;
