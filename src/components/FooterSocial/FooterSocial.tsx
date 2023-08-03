import { FC } from "react";
import Link from "next/link";

import Facebook from "public/images/footer/facebook.svg";
import Instagram from "public/images/footer/instagram.svg";
import Linkedin from "public/images/footer/linkedin.svg";
import Pinterest from "public/images/footer/pinterest.svg";
import Twitter from "public/images/footer/twitter.svg";
import Youtube from "public/images/footer/youtube.svg";

import Button from "../Button/Button";

import data from "@/data/data.json";

const FooterSocial: FC = () => {
  const icon = [Facebook, Instagram, Linkedin, Pinterest, Twitter, Youtube];
  return (
    <div className="flex flex-col items-center xl:items-start xl:pl-20">
      <h2 className="text-white font-bold text-base mb-7 xl:mb-10">
        {data.social.text}
      </h2>
      <ul className="flex gap-5 mb-12 flex-wrap justify-center">
        {icon.map((Icon, index) => (
          <li key={index}>
            <Link href={"/"}>
              <Icon />
            </Link>
          </li>
        ))}
      </ul>
      <Button>{data.social.btn}</Button>
    </div>
  );
};

export default FooterSocial;
