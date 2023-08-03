import { FC, useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll, Events } from "react-scroll";
import { useInView } from "react-intersection-observer";

import Logo from "@/components/Logo/Logo";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";

import BurgerButton from "public/images/header/burger-menu.svg";
import CloseButton from "public/images/close.svg";

import data from "@/data/data.json";

const ObserverHeader: FC = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  const lastSectionRef = useRef<HTMLDivElement>(null);
  const lastSectionObserver = useInView({
    rootMargin: "-1px",
    triggerOnce: true,
  });

  useEffect(() => {
    if (lastSectionObserver.inView) {
      setActiveSection("lastSection");
    }
  }, [lastSectionObserver.inView]);

  return (
    <header
      ref={lastSectionRef}
      id="home"
      className="py-5 bg-main bg-opacity-95 fixed top-0 left-0 w-full z-50"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link
            offset={-10000}
            smooth={true}
            duration={500}
            className="cursor-pointer"
            to="home"
            spy={true}
          >
            <Logo />
          </Link>
          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="cursor-pointer relative z-[60] xl:hidden"
          >
            {showMenu ? <BurgerButton /> : <CloseButton />}
          </button>
          {!showMenu && <BurgerMenu setShowMenu={setShowMenu} />}
          <nav className="hidden xl:block">
            <ul className="flex gap-x-10">
              {data.header.link.map(({ title, url }) => (
                <li key={url}>
                  <Link
                    offset={-159}
                    smooth={true}
                    duration={500}
                    className={`text-xs text-white cursor-pointer ${
                      activeSection === url ? "active" : ""
                    }`}
                    to={url}
                    onSetActive={handleSetActive}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="gap-x-[38px] hidden xl:flex">
            <Link
              className={`flex items-center justify-center cursor-pointer bg-gradient-left-to-right py-4 text-main font-bold text-xs rounded-full w-[154px] ${
                activeSection === "join" ? "active" : ""
              }`}
              smooth={true}
              duration={500}
              to="join"
              onSetActive={() => setActiveSection("join")}
            >
              {data.header.btnJoin.title}
            </Link>
            <Link
              className={`flex items-center justify-center cursor-pointer bg-transparent text-white border-2 border-white py-4 font-bold text-xs rounded-full w-[154px] ${
                activeSection === "contact" ? "active" : ""
              }`}
              smooth={true}
              duration={500}
              to="contact"
              onSetActive={() => setActiveSection("contact")}
            >
              {data.header.btnContact.title}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ObserverHeader;
