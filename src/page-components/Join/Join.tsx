import { FC } from "react";
import Form from "@/components/Form/Form";

import data from "@/data/data.json";

const Join: FC = () => {
  return (
    <section id="join" className="pt-20 xl:pt-28 ">
      <div className="container">
        <div className="bg-gradient-radial-simple-2 shadow-bg rounded-[40px] py-[45px] px-5 xl:py-[84px] xl:px-[107px]">
          <h2 className="title mb-12 text-center item">{data.join.title}</h2>
          <h3 className="sub-title text-center mb-9 xl:mb-[65px]">
            {data.join.subtitle}
          </h3>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Join;
