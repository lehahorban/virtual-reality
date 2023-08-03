import { FC } from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { SliderProps } from "./Slider.props";

const Slider: FC<SliderProps> = ({
  children,
  className,
  slide,
  space,
  prevBtn,
  nextBtn,
  prevBtnStyle,
  nextBtnStyle,
  btnChildrenLeft,
  btnChildrenRight,
}) => {
  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView={slide}
          spaceBetween={space}
          navigation={{
            prevEl: "." + prevBtn,
            nextEl: "." + nextBtn,
          }}
          modules={[Navigation]}
          className={`mySwiper ${className} `}
          breakpoints={{
            120: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1312: {
              slidesPerView: slide,
            },
          }}
        >
          {children}
        </Swiper>

        <button className={`${prevBtn} ${prevBtnStyle}`}>
          {btnChildrenLeft}
        </button>
        <button className={`${nextBtn} ${nextBtnStyle}`}>
          {btnChildrenRight}
        </button>
      </div>
    </>
  );
};

export default Slider;

// import { FC } from "react";
// import { Swiper, SwiperClass } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// import { SliderProps } from "./Slider.props";

// const Slider: FC<SliderProps> = ({
//   children,
//   className,
//   slide,
//   space,
//   prevBtn,
//   nextBtn,
//   prevBtnStyle,
//   nextBtnStyle,
//   btnChildrenLeft,
//   btnChildrenRight,
// }) => {
//   const swiperOptions: SwiperClass = {
//     slidesPerView: slide,
//     spaceBetween: space,
//     navigation: {
//       prevEl: "." + prevBtn,
//       nextEl: "." + nextBtn,
//     },
//     modules: [Navigation],

//     breakpoints: {
//       120: {
//         slidesPerView: 1,
//         spaceBetween: space,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: space,
//       },
//       1312: {
//         slidesPerView: slide,
//         spaceBetween: space,
//       },
//     },
//   };

//   return (
//     <div className="relative">
//       <Swiper className={`mySwiper ${className} `} {...swiperOptions}>
//         {children}
//       </Swiper>

//       <button className={`${prevBtn} ${prevBtnStyle}`}>
//         {btnChildrenLeft}
//       </button>
//       <button className={`${nextBtn} ${nextBtnStyle}`}>
//         {btnChildrenRight}
//       </button>
//     </div>
//   );
// };

// export default Slider;
