import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="py-5 md:py-10 xl:py-14 flex justify-between">
      <div className="flex">
        <Link href="/">João Victor Rocha</Link>
        <Link href="/about-me" className="px-5">
          About me
        </Link>
      </div>
      <Link href="https://github.com/vixtorocha">Github</Link>
    </div>
  );
};
export default Header;
