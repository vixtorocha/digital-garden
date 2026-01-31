import React from "react";
import Link from "./Link";
import { LanguageSwitcher } from "@/components/local-switcher";

type HeaderProps = {
  t: (key: string) => string;
};

const Header = ({ t }: HeaderProps) => {
  return (
    <div className="py-5 md:py-10 xl:py-14 flex justify-between">
      <div className="flex">
        <Link href="/">João Victor Rocha</Link>
        <Link href="/about-me" className="px-5">
          {t("header.about")}
        </Link>
      </div>
      <div className="flex">
        <LanguageSwitcher />
        <Link href="https://github.com/vixtorocha">Github</Link>
      </div>
    </div>
  );
};
export default Header;
