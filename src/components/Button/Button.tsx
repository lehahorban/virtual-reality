import { FC } from "react";
import { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({ children, className, transparent }) => {
  return (
    <button
      className={`${
        transparent ? "bg-transparent" : "bg-gradient-left-to-right"
      } py-4 text-main font-bold text-center text-[12px] rounded-full w-[154px] ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
