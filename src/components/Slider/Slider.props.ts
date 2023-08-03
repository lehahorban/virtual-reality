import { ReactNode } from "react";
export interface SliderProps {
  children: ReactNode;
  className?: string;
  slide?: number;
  space?: number;
  prevBtn?: string;
  nextBtn?: string;
  prevBtnStyle?: string;
  nextBtnStyle?: string;
  btnChildrenLeft?: ReactNode;
  btnChildrenRight?: ReactNode;
}
