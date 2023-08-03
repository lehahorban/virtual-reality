import { FC } from "react";

import data from "@/data/data.json";

const FooterNav: FC = () => {
  return (
    <nav className="hidden xl:block xl:pl-20">
      <ul className="flex flex-col gap-4">
        {data.footer.nav.map(({ text }) => (
          <li key={text}>
            <p className="text-white font-bold text-base">{text}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
