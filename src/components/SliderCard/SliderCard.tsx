import { FC } from "react";
import Image from "next/image";

import { SliderCardProps } from "./Slider.card.props";

const SliderCard: FC<SliderCardProps> = ({ image, title, text, index }) => {
  return (
    <div
      className={`${
        index === 1
          ? "xl:border-l-[1px] xl:border-r-[1px] xl:border-neutral-500 xl:py-5 xl:px-20"
          : ""
      } flex items-center mx-auto`}
    >
      <Image
        className="w-6 h-6 md:w-[45px] md:h-[45px]"
        width={45}
        height={45}
        src={image.url}
        alt={image.alt}
      />
      <div className="ml-3 md:ml-6 max-w-[135px] xl:max-w-full">
        <p className="font-bold text-white text-2xl smOnly:hidden">{title}</p>
        <p className="font-normal text-white text-sm xl:mt-2 break-words ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
