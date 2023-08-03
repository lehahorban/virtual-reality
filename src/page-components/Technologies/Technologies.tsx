import { FC } from "react";
import Image from "next/image";

import Slider from "@/components/Slider/Slider";
import { SwiperSlide } from "swiper/react";

import ArrowBtn from "@/components/ArrowBtn/ArrowBtn";

import Unreal from "public/images/build/unreal.svg";
import Unity from "public/images/build/unity.svg";
import Oculus from "public/images/build/oculus.svg";
import Vive from "public/images/build/vive.svg";

import data from "@/data/data.json";

const Technologies: FC = () => {
  return (
    <section id="technologies" className="pt-[56px] xl:pt-[112px]">
      <div className="container">
        <div className="relative">
          <Image
            width={1278}
            height={348}
            src={data.build.image.url}
            alt={data.build.image.alt}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="title smOnly:text-base mb-3">
              {data.build.technologyTitle}
            </h2>
            <h3 className="sub-title smOnly:text-xl">
              {data.build.technologySubtitle}
            </h3>
          </div>
        </div>
        <Slider
          slide={4}
          space={0}
          prevBtn="technology-button-prev"
          nextBtn="technology-button-next"
          prevBtnStyle="absolute !top-[40%] !left-[-15px] z-40"
          nextBtnStyle="absolute !top-[40%] !right-[-15px] z-40"
          btnChildrenLeft={<ArrowBtn left={true} />}
          btnChildrenRight={<ArrowBtn />}
        >
          <SwiperSlide className="!flex !items-center !justify-center">
            <Unreal className="w-[174px] h-[174px] mt-[50px]" />{" "}
          </SwiperSlide>
          <SwiperSlide className="!flex !items-center !justify-center">
            <Unity />{" "}
          </SwiperSlide>
          <SwiperSlide className="!flex !items-center !justify-center">
            <Oculus />{" "}
          </SwiperSlide>
          <SwiperSlide className="!flex !items-center !justify-center">
            <Vive />{" "}
          </SwiperSlide>
        </Slider>
      </div>
    </section>
  );
};

export default Technologies;
