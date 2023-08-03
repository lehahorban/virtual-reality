import { FC } from "react";
import Image from "next/image";

import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

import { BuildCardProps } from "./Build.card.props";

const BuildCard: FC<BuildCardProps> = ({ image, title, text, btnText }) => {
  return (
    <div className="flex flex-col items-center pt-6 pb-10 px-6 bg-gradient-radial-simple rounded-3xl">
      <Image
        className="w-[191px] h-[191px] mb-5"
        width={191}
        height={191}
        src={image.url}
        alt={image.alt}
      />
      <h2 className="font-bold text-white text-2xl pb-4 border-b border-gray-500 mb-5">
        {title}
      </h2>
      <Paragraph className="mb-9">{text}</Paragraph>
      <Button>{btnText}</Button>
    </div>
  );
};

export default BuildCard;
