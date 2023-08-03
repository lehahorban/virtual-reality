import { FC } from "react";
import { ParagraphProps } from "./Paragraph.props";

const Paragraph: FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={`font-normal text-[16px] leading-[19.5px] text-white ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
