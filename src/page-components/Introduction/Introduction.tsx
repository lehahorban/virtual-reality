import { FC } from "react";

import Paragraph from "@/components/Paragraph/Paragraph";

import data from "@/data/data.json";

const Introduction: FC = () => {
  return (
    <section className="pt-[59px] xl:pt-[90px]">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <div className="flex flex-col items-center xl:block">
            <h2 className="title">{data.introduction.title}</h2>
            <h3 className="sub-title-arrow ">{data.introduction.subtitle}</h3>
          </div>
          <Paragraph className="hidden xl:block max-w-[652px]">
            {data.introduction.text}
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
