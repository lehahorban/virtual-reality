import { FC } from "react";
import LogoImg from "public/images/logo/logo-img.svg";
import LogoText from "public/images/logo/logo-text.svg";
import LogoImgXl from "public/images/logo/logo-img-xl.svg";
import LogoTextXl from "public/images/logo/logo-text-xl.svg";

const Logo: FC = () => {
  return (
    <div className="flex items-center">
      <LogoImg className="md:hidden" />
      <LogoText className="md:hidden ml-[11px]" />
      <LogoImgXl className="smOnly:hidden" />
      <LogoTextXl className="smOnly:hidden ml-[15px]" />
    </div>
  );
};

export default Logo;
