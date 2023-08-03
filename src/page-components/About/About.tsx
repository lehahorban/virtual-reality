import { FC } from "react";
import Image from "next/image";

import Paragraph from "@/components/Paragraph/Paragraph";
import Button from "@/components/Button/Button";

import data from "@/data/data.json";

const About: FC = () => {
  return (
    <section id="about" className="pt-[36px] xl:pt-[90px]">
      <div className="container">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <Image
            className="smOnly:mb-[51px]"
            width={524}
            height={557}
            src={data.about.image.url}
            alt={data.about.image.alt}
          />
          <div className="flex flex-col justify-center smOnly:items-center max-w-[630px]">
            <h2 className="title hidden xl:block mb-[5px]">
              {data.about.title}
            </h2>
            <h3 className="sub-title hidden xl:block mb-[42px]">
              {data.about.subtitle}
            </h3>
            <Paragraph className="max-w-[652px] mb-[34px] xl:mb-[45px}">
              {data.about.text}
            </Paragraph>
            <Button className="w-[276px] xl:w-[214px]">
              {data.about.btn.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
