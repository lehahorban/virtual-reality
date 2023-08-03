import { FC } from "react";

import data from "@/data/data.json";

const FooterInfo: FC = () => {
  return (
    <ul className="hidden xl:flex flex-col gap-4 xl:pl-20">
      {data.footer.list.map(({ text }) => (
        <li key={text}>
          <p className="text-white font-bold text-base">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default FooterInfo;
