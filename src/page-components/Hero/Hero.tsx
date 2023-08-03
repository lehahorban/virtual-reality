import { FC } from "react";
import Image from "next/image";

import css from "./Hero.module.css";

import Paragraph from "@/components/Paragraph/Paragraph";
import Button from "@/components/Button/Button";
import Slider from "@/components/Slider/Slider";
import SliderCard from "@/components/SliderCard/SliderCard";
import Left from "public/images/left.svg";
import Right from "public/images/right.svg";

import { SwiperSlide } from "swiper/react";

import data from "@/data/data.json";

const Hero: FC = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div
          className={`flex flex-col-reverse md:flex-row justify-between ${css.hero} py-[54px] md:py-[124px]`}
        >
          <div className="md:w-[456px] flex flex-col smOnly:items-center">
            <h1 className="relative z-10 max-w-[276px] xl:max-w-md smOnly:text-center mb-9 font-bold text-[36px] leading-[43px] bg-gradient-text xl:text-5xl">
              Dive{" "}
              <span className="text-white text-[24px] leading-[29px] xl:text-4xl">
                Into The Depths Of
              </span>{" "}
              Virtual Reality
            </h1>
            <Paragraph className="smOnly:hidden mb-[66px]">
              {data.hero.text}
            </Paragraph>
            <Button className="w-full md:w-[214px]">
              {data.hero.btn.text}
            </Button>
          </div>
          <div className={`${css.heroThumb} smOnly:mb-[30px]`}>
            <Image
              className="md:hidden relative z-10"
              width={490}
              height={426}
              src={data.hero.imageSm.url}
              alt={data.hero.imageSm.url}
            />
            <Image
              className="smOnly:hidden relative z-10"
              width={490}
              height={426}
              src={data.hero.imageXl.url}
              alt={data.hero.imageXl.url}
            />
          </div>
        </div>
        <Slider
          slide={3}
          space={0}
          className="rounded-full h-[140px] bg-gradient-radial-2"
          prevBtn="hero-button-prev"
          nextBtn="hero-button-next"
          prevBtnStyle="absolute !top-[55px] !left-[15px] z-40 "
          nextBtnStyle="absolute !top-[55px] !right-[15px] z-40"
          btnChildrenLeft={<Left />}
          btnChildrenRight={<Right />}
        >
          {data.hero.card.map(({ image, title, text }, index) => (
            <SwiperSlide
              key={title}
              className="!flex !items-center !justify-center"
            >
              <SliderCard
                image={image}
                title={title}
                text={text}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
