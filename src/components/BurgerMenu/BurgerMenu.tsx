import { FC } from "react";
import { Link } from "react-scroll";

import { BurgerMenuProps } from "./BurgerMenu.props";

import data from "@/data/data.json";

const BurgerMenu: FC<BurgerMenuProps> = ({ setShowMenu }) => {
  return (
    <div className="bg-slate-800 h-screen absolute inset-0 flex flex-col items-center justify-center z-50 py-5">
      <nav>
        <ul className="flex flex-col items-center gap-8">
          {data.header.link.map(({ title, url }) => (
            <li key={url}>
              <Link
                onClick={() => setShowMenu(true)}
                offset={-101}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                className="text-2xl text-white"
                to={url}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="gap-8 flex flex-col items-center mt-5">
        <Link
          offset={-101}
          onClick={() => setShowMenu(true)}
          className="cursor-pointer bg-transparent text-white border-2 border-white py-4 font-bold flex items-center justify-center text-xs rounded-full w-[154px]"
          smooth={true}
          duration={500}
          to="join"
        >
          {data.header.btnJoin.title}
        </Link>
        <Link
          offset={-101}
          onClick={() => setShowMenu(true)}
          className="cursor-pointer bg-gradient-left-to-right py-4 text-main font-bold flex items-center justify-center text-xs rounded-full w-[154px]"
          smooth={true}
          duration={500}
          to="contact"
        >
          {data.header.btnContact.title}
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
