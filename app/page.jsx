import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Home/Social";
import Photo from "@/components/Home/Photo";
import Stats from "@/components/Home/Stats";
import TextTypeAnimation from "@/components/Home/TextTypeAnimation";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 text-2xl md:text-4xl lg:text-5xl font-semibold my-6">
              Hello I'm <br />
              <span className="text-accent mt-2">
                <TextTypeAnimation />
              </span>
            </h1>
            <p className="text-xl mb-3">
              Building Scalable Web Applications{" "}
              <span className="text-accent">|</span>
            </p>
            <p className="max-w-xl mb-9 text-white/80 text-sm md:text-base">
              I excel at crafting elegant experiences and I am proficient in
              various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/resume.pdf" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 rounded-full cursor-pointer"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
