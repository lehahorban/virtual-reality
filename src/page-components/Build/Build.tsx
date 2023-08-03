import { FC } from "react";

import Paragraph from "@/components/Paragraph/Paragraph";
import Slider from "@/components/Slider/Slider";
import BuildCard from "@/components/BuildCard/BuildCard";
import ArrowBtn from "@/components/ArrowBtn/ArrowBtn";

import { SwiperSlide } from "swiper/react";

import data from "@/data/data.json";

const Build: FC = () => {
  return (
    <section id="services" className="pt-[59px] xl:pt-[90px]">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between items-center mb-[107px]">
          <div className="flex flex-col items-center xl:block">
            <h2 className="title">{data.build.title}</h2>
            <h3 className="sub-title-arrow ">{data.build.subtitle}</h3>
          </div>
          <Paragraph className="hidden xl:block max-w-[652px]">
            {data.build.text}
          </Paragraph>
        </div>
        <Slider
          slide={4}
          space={11}
          prevBtn="build-button-prev"
          nextBtn="build-button-next"
          prevBtnStyle="absolute !top-[40%] !left-[-15px] z-40"
          nextBtnStyle="absolute !top-[40%] !right-[-15px] z-40"
          btnChildrenLeft={<ArrowBtn left={true} />}
          btnChildrenRight={<ArrowBtn />}
        >
          {data.build.card.map(({ image, title, text, btn }) => (
            <SwiperSlide key={title}>
              <BuildCard
                image={image}
                title={title}
                text={text}
                btnText={btn.text}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Build;
