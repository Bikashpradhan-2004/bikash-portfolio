import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const ProjectGallery = ({ projects, onSlideChange }) => {
  const handleSlideChange = (swiper) => {
    onSlideChange(swiper.activeIndex);
  };

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      className="xl:h-[520px] mb-12"
      onSlideChange={handleSlideChange}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="w-full">
          <div className="h-[200px] md:h-[380px] relative group flex justify-center items-center bg-primary">
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                fill
                className="object-contain"
                alt={project.title}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <WorkSliderBtns
        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
      />
    </Swiper>
  );
};

export default ProjectGallery;
