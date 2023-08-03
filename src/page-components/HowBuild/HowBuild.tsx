import { FC } from "react";

import Paragraph from "@/components/Paragraph/Paragraph";
import Slider from "@/components/Slider/Slider";
import ArrowBtn from "@/components/ArrowBtn/ArrowBtn";

import { SwiperSlide } from "swiper/react";

import data from "@/data/data.json";

const HowBuild: FC = () => {
  return (
    <section id="how" className="pt-[59px] xl:pt-[90px] howBuildSection">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between items-center mb-[107px]">
          <div className="flex flex-col items-center xl:block">
            <h2 className="title">{data.howBuild.title}</h2>
            <h3 className="sub-title-arrow ">{data.howBuild.subtitle}</h3>
          </div>
          <Paragraph className="hidden xl:block max-w-[652px]">
            {data.howBuild.text}
          </Paragraph>
        </div>
        <Slider
          slide={4}
          space={0}
          prevBtn="how-build-button-prev"
          nextBtn="how-build-button-next"
          prevBtnStyle="absolute !top-[40%] !left-[-15px] z-40"
          nextBtnStyle="absolute !top-[40%] !right-[-15px] z-40"
          btnChildrenLeft={<ArrowBtn left={true} />}
          btnChildrenRight={<ArrowBtn />}
        >
          {data.howBuild.card.map(({ number, text }) => (
            <SwiperSlide key={number} className="!flex !flex-col !items-center">
              <div className="w-[198px] h-[198px] bg-[#0E0E0E52] rounded-full flex items-center justify-center mb-6">
                <div className="bg-btn w-[159px] h-[159px] rounded-full flex items-center justify-center">
                  <p className="font-bold text-6xl text-main">{number}</p>
                </div>
              </div>
              <p className="text-arrow text-white font-bold text-2xl flex max-w-[225px]">
                {text}
              </p>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HowBuild;
