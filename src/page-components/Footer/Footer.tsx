import { FC } from "react";
import Link from "next/link";

import Logo from "public/images/logo.svg";
import FooterNav from "@/components/FooterNav/FooterNav";
import FooterInfo from "@/components/FooterInfo/FooterInfo";
import FooterSocial from "@/components/FooterSocial/FooterSocial";

import data from "@/data/data.json";

const Footer: FC = () => {
  return (
    <footer
      id="contact"
      className="py-[81px] xl:pt-[120px] xl:pb-[60px] footer"
    >
      <div className="container ">
        <div className="flex flex-col items-center xl:flex-row xl:items-start justify-between footer-border footer-border-bottom pb-14 xl:pb-20">
          <Link href={"/"}>
            <Logo />
          </Link>
          <FooterNav />
          <FooterInfo />
          <FooterSocial />
        </div>
        <p className="text-white font-bold text-sm mt-10 xl:mt-12 text-center">
          {data.footer.description}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
