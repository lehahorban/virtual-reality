import { FC } from "react";

import Left from "public/images/left-arrow.svg";
import Right from "public/images/right-arrow.svg";

import { ArrowBtn } from "./ArrowBtn.props";

const ArrowBtn: FC<ArrowBtn> = ({ left }) => {
  return (
    <div className="w-[62px] h-[62px] bg-[#0E0E0E52] rounded-full flex items-center justify-center">
      <div className="bg-btn w-[44px] h-[44px] rounded-full flex items-center justify-center">
        {left ? <Left /> : <Right />}
      </div>
    </div>
  );
};

export default ArrowBtn;
