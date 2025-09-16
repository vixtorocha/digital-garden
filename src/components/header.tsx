import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="py-5 md:py-10 xl:py-14 flex justify-between">
      <div>João Victor Rocha</div>
      <Link href="https://github.com/vixtorocha">Github</Link>
    </div>
  );
};
export default Header;
